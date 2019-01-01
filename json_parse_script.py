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

# Filter Requests to fit the API request format
api_response_requests = []
for request in requests:
    api_response_requests.append({
        "pk": request["pk"],
        "author_full_name": request["author_full_name"],
        "author_username": request["author"],
        "location": request["location"],
        "course": request["course"],
        "description": request["description"],
        "time_created": request["time_created"],
        "acceptor_netid": request["accepted_by"],
        "time_accepted": request["time_accepted"],
        "closer_username": request["closed_by"],
        "time_closed": request["time_closed"]
    })
    
# Reset the requests to appropriate format
requests = api_response_requests

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

    accepted_by = request["acceptor_netid"]
    t_created = datetime.datetime.strptime(time_created, "%Y-%m-%dT%H:%M")
    t_closed = datetime.datetime.strptime(time_closed, "%Y-%m-%dT%H:%M")
    t_accepted = datetime.datetime.strptime(time_accepted, "%Y-%m-%dT%H:%M")

    t_created += datetime.timedelta(days=46) 
    t_closed += datetime.timedelta(days=46)
    t_accepted += datetime.timedelta(days=46)
    
    accepted_date = t_accepted.date().isoformat()
    date_ta_dic.setdefault(accepted_date, set()).add(accepted_by)
    date_set.add(accepted_date)

    req = {
        **request,
        "time_created": t_created.isoformat(),
        "time_closed": t_closed.isoformat(),
        "time_accepted": t_accepted.isoformat()
    }
    date_dic.setdefault(accepted_date, []).append(req)

date_list = list(date_set)
date_list.sort(reverse=True)

reqs = []
i = 0
i_max = len(date_list)
while i < i_max:
    # for random  incremented date
    date = date_list[i]
    # get the requests and tas on that date
    date_requests, date_tas = date_dic[date], list(date_ta_dic[date])
    # choose a random ta
    random_ta = random.choice(date_tas)

    # Filter through the requests with the netid being ta
    random_ta_req_for_shift = [req for req in date_requests if req["acceptor_netid"] == random_ta]

    for req in random_ta_req_for_shift:
        req["acceptor_netid"], req["closer_username"] = DEMO_USERNAME, DEMO_USERNAME
    reqs += random_ta_req_for_shift
    i += random.randint(2, 6)

with open(WRITE_FILEPATH, 'w') as outfile:
    json.dump(reqs, outfile, indent = 4, ensure_ascii=False)
