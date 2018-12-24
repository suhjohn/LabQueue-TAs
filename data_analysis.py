import json
import random
import datetime


READ_FILEPATH = "./labqueue.json"
WRITE_FILEPATH = "./requests_data.json"
DATE_FORMAT = "%Y-%m-%dT%H:%M"

def get_json(path):
    with open(path, 'r') as f:
        data = json.load(f)
    data.reverse()
    return data

def parse_request_time(request_time_created_str):
    return datetime.datetime.strptime(request_time_created_str, DATE_FORMAT)

requests = get_json(READ_FILEPATH)

# X axis
dates = [
    datetime.datetime(year=2017, month=6, day=1),
    datetime.datetime(year=2018, month=1, day=25),
    datetime.datetime(year=2018, month=6, day=1),
    datetime.datetime(year=2018, month=12, day=1),
]

# Sort requests by their created time
requests.sort(key=lambda request: request["time_created"])
total_size = len(requests)

dates_count = [None for i in range(len(dates))]

for i, date in enumerate(dates):
    filtered_reqs = [req for req in requests if parse_request_time(req["time_created"]) < date]
    dates_count[i] = len(filtered_reqs)

dates_count_dict = {}
for date, count in zip(dates, dates_count):
    dates_count_dict[date.date().isoformat()] = count

with open(WRITE_FILEPATH, 'w') as outfile:
    json.dump(dates_count_dict, outfile, indent = 4, ensure_ascii=False)
