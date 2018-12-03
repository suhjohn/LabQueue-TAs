import json
import random
import datetime

def get_json(path):
    with open(path, 'r') as f:
        data = json.load(f)
    data.reverse()
    return data

READ_FILEPATH = "./labqueue.json"
WRITE_FILEPATH = "./labqueue_stats/assets/static/dummydata.json"
DATE_FORMAT = "%Y-%m-%dT%H:%M"
DEMO_USERNAME = "demouser"
requests = get_json(READ_FILEPATH)

# {<date:yy-mm-dd>: [<request>, <request>, <request>,...]}
date_dic = {}
# {<date:yy-mm-dd>: ["ta_name1","ta_name2","ta_name3",...]}
date_ta_dic = {}
date_set = set()
for request in requests:
    time_accepted = request["time_accepted"]
    time_created = request["time_created"]
    time_closed = request["time_closed"]
    if not time_accepted: 
        continue
    if not time_created:
        continue
    if not time_closed:
        continue

    accepted_by = request["accepted_by"]
    t_created = datetime.datetime.strptime(time_created, "%Y-%m-%dT%H:%M")
    t_closed = datetime.datetime.strptime(time_closed, "%Y-%m-%dT%H:%M")
    t_accepted = datetime.datetime.strptime(time_accepted, "%Y-%m-%dT%H:%M")

    t_created += datetime.timedelta(days=46) 
    t_closed += datetime.timedelta(days=46)
    t_accepted += datetime.timedelta(days=46)

    t_created = t_created.isoformat()
    t_closed = t_closed.isoformat()
    t_accepted = t_accepted.isoformat()

    date_ta_dic.setdefault(t_accepted, set()).add(accepted_by)
    date_set.add(t_accepted)

    req = {
        **request,
        "time_created": t_created,
        "time_closed": t_closed,
        "time_accepted": t_accepted
    }
    date_dic.setdefault(t_accepted, []).append(req)

date_list = list(date_set)
date_list.sort(reverse=True)

reqs = []
i = random.randint(4, 8)
for date in date_list[:len(date_list)//2:i]:
    date_requests, date_tas = date_dic[date], list(date_ta_dic[date])
    random_ta = random.choice(date_tas)
    random_ta_req_for_shift = [req for req in date_requests if req["accepted_by"] == random_ta]
    for req in random_ta_req_for_shift:
        req["accepted_by"], req["closed_by"] = DEMO_USERNAME, DEMO_USERNAME
    reqs += random_ta_req_for_shift
    i = random.randint(4, 8)

with open(WRITE_FILEPATH, 'w') as outfile:
    json.dump(reqs, outfile, indent = 4, ensure_ascii=False)
