import Vue from "vue";
import Vuex, { mapActions } from "vuex";
import apis from "@/apis/index";

Vue.use(Vuex);
const store = () =>
  new Vuex.Store({
    state: {
      /* 
      labTA:
        full_name: SerializerMethodField
        netid: Str
        puid: Str
        major: Str
        grad_year: Int
        type: ?
        picture: Str
        is_active: Bool
      labTAs:
          {LabTA.netId: {LabTA...}, } 
      */
      labTAs: {},
      self: {
        full_name: "John Suh",
        netid: "ssuh",
        puid: 960886217,
        major: "COS",
        grad_year: 2020,
        type: "full",
        picture: "",
        is_active: true
      },
      /* 
      request:
        pk: Int
        author_full_name: Str
        author_username: Str
        location: Str
        course: ?
        description: Str
        time_created: DateTime(? String?)
        acceptor_netid: ?
        time_accepted: DateTime(? String?)
        closer_username: Str
        time_closed: DateTime in String: "2017-10-24T19:26"
      requests:
        {request.pk : {request...}}
      */
      requests: {},
      shiftRequests: [
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 12,
            time_accepted: "2016-02-15T00:45",
            time_closed: "2016-02-15T01:37",
            time_created: "2016-02-15T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 14,
            time_accepted: "2016-02-15T00:45",
            time_closed: "2016-02-15T01:37",
            time_created: "2016-02-15T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 28,
            time_accepted: "2016-02-15T00:45",
            time_closed: "2016-02-15T01:37",
            time_created: "2016-02-15T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 81,
            time_accepted: "2016-02-15T00:45",
            time_closed: "2016-02-15T01:37",
            time_created: "2016-02-15T00:44"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 0,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 26,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 36,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 54,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 55,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 83,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 86,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 92,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 99,
            time_accepted: "2018-01-06T00:44",
            time_closed: "2018-01-06T01:36",
            time_created: "2018-01-06T00:43"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 31,
            time_accepted: "2016-04-05T00:38",
            time_closed: "2016-04-05T01:30",
            time_created: "2016-04-05T00:37"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 33,
            time_accepted: "2016-04-05T00:38",
            time_closed: "2016-04-05T01:30",
            time_created: "2016-04-05T00:37"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 59,
            time_accepted: "2016-04-05T00:38",
            time_closed: "2016-04-05T01:30",
            time_created: "2016-04-05T00:37"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 67,
            time_accepted: "2016-04-05T00:38",
            time_closed: "2016-04-05T01:30",
            time_created: "2016-04-05T00:37"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 94,
            time_accepted: "2016-04-05T00:38",
            time_closed: "2016-04-05T01:30",
            time_created: "2016-04-05T00:37"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 96,
            time_accepted: "2016-04-05T00:38",
            time_closed: "2016-04-05T01:30",
            time_created: "2016-04-05T00:37"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 13,
            time_accepted: "2016-02-21T00:16",
            time_closed: "2016-02-21T01:08",
            time_created: "2016-02-21T00:15"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 17,
            time_accepted: "2016-02-21T00:16",
            time_closed: "2016-02-21T01:08",
            time_created: "2016-02-21T00:15"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 38,
            time_accepted: "2016-02-21T00:16",
            time_closed: "2016-02-21T01:08",
            time_created: "2016-02-21T00:15"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 40,
            time_accepted: "2016-02-21T00:16",
            time_closed: "2016-02-21T01:08",
            time_created: "2016-02-21T00:15"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 52,
            time_accepted: "2016-02-21T00:16",
            time_closed: "2016-02-21T01:08",
            time_created: "2016-02-21T00:15"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 63,
            time_accepted: "2016-02-21T00:16",
            time_closed: "2016-02-21T01:08",
            time_created: "2016-02-21T00:15"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 72,
            time_accepted: "2016-02-21T00:16",
            time_closed: "2016-02-21T01:08",
            time_created: "2016-02-21T00:15"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 11,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 22,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 32,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 39,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 42,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 60,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 76,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 82,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 89,
            time_accepted: "2018-05-21T00:04",
            time_closed: "2018-05-21T00:56",
            time_created: "2018-05-21T00:03"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 1,
            time_accepted: "2018-07-10T00:45",
            time_closed: "2018-07-10T01:37",
            time_created: "2018-07-10T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 23,
            time_accepted: "2018-07-10T00:45",
            time_closed: "2018-07-10T01:37",
            time_created: "2018-07-10T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 43,
            time_accepted: "2018-07-10T00:45",
            time_closed: "2018-07-10T01:37",
            time_created: "2018-07-10T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 73,
            time_accepted: "2018-07-10T00:45",
            time_closed: "2018-07-10T01:37",
            time_created: "2018-07-10T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 84,
            time_accepted: "2018-07-10T00:45",
            time_closed: "2018-07-10T01:37",
            time_created: "2018-07-10T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 85,
            time_accepted: "2018-07-10T00:45",
            time_closed: "2018-07-10T01:37",
            time_created: "2018-07-10T00:44"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 7,
            time_accepted: "2016-10-10T00:33",
            time_closed: "2016-10-10T01:25",
            time_created: "2016-10-10T00:32"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 41,
            time_accepted: "2016-10-10T00:33",
            time_closed: "2016-10-10T01:25",
            time_created: "2016-10-10T00:32"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 71,
            time_accepted: "2016-10-10T00:33",
            time_closed: "2016-10-10T01:25",
            time_created: "2016-10-10T00:32"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 87,
            time_accepted: "2016-10-10T00:33",
            time_closed: "2016-10-10T01:25",
            time_created: "2016-10-10T00:32"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 91,
            time_accepted: "2016-10-10T00:33",
            time_closed: "2016-10-10T01:25",
            time_created: "2016-10-10T00:32"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 3,
            time_accepted: "2017-01-27T00:02",
            time_closed: "2017-01-27T00:54",
            time_created: "2017-01-27T00:01"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 16,
            time_accepted: "2017-01-27T00:02",
            time_closed: "2017-01-27T00:54",
            time_created: "2017-01-27T00:01"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 37,
            time_accepted: "2017-01-27T00:02",
            time_closed: "2017-01-27T00:54",
            time_created: "2017-01-27T00:01"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 68,
            time_accepted: "2017-01-27T00:02",
            time_closed: "2017-01-27T00:54",
            time_created: "2017-01-27T00:01"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 77,
            time_accepted: "2017-01-27T00:02",
            time_closed: "2017-01-27T00:54",
            time_created: "2017-01-27T00:01"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 79,
            time_accepted: "2017-01-27T00:02",
            time_closed: "2017-01-27T00:54",
            time_created: "2017-01-27T00:01"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 93,
            time_accepted: "2017-01-27T00:02",
            time_closed: "2017-01-27T00:54",
            time_created: "2017-01-27T00:01"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 98,
            time_accepted: "2017-01-27T00:02",
            time_closed: "2017-01-27T00:54",
            time_created: "2017-01-27T00:01"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 4,
            time_accepted: "2017-09-06T00:39",
            time_closed: "2017-09-06T01:31",
            time_created: "2017-09-06T00:38"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 19,
            time_accepted: "2017-09-06T00:39",
            time_closed: "2017-09-06T01:31",
            time_created: "2017-09-06T00:38"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 20,
            time_accepted: "2017-09-06T00:39",
            time_closed: "2017-09-06T01:31",
            time_created: "2017-09-06T00:38"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 25,
            time_accepted: "2017-09-06T00:39",
            time_closed: "2017-09-06T01:31",
            time_created: "2017-09-06T00:38"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 64,
            time_accepted: "2017-09-06T00:39",
            time_closed: "2017-09-06T01:31",
            time_created: "2017-09-06T00:38"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 80,
            time_accepted: "2017-09-06T00:39",
            time_closed: "2017-09-06T01:31",
            time_created: "2017-09-06T00:38"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 15,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 21,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 24,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 30,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 46,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 49,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 57,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 65,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 66,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 78,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 95,
            time_accepted: "2017-07-22T00:52",
            time_closed: "2017-07-22T01:44",
            time_created: "2017-07-22T00:51"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 27,
            time_accepted: "2016-04-06T00:47",
            time_closed: "2016-04-06T01:39",
            time_created: "2016-04-06T00:46"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 47,
            time_accepted: "2016-04-06T00:47",
            time_closed: "2016-04-06T01:39",
            time_created: "2016-04-06T00:46"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 69,
            time_accepted: "2016-04-06T00:47",
            time_closed: "2016-04-06T01:39",
            time_created: "2016-04-06T00:46"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 8,
            time_accepted: "2016-02-10T00:41",
            time_closed: "2016-02-10T01:33",
            time_created: "2016-02-10T00:40"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 35,
            time_accepted: "2016-02-10T00:41",
            time_closed: "2016-02-10T01:33",
            time_created: "2016-02-10T00:40"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 44,
            time_accepted: "2016-02-10T00:41",
            time_closed: "2016-02-10T01:33",
            time_created: "2016-02-10T00:40"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 56,
            time_accepted: "2016-02-10T00:41",
            time_closed: "2016-02-10T01:33",
            time_created: "2016-02-10T00:40"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 62,
            time_accepted: "2016-02-10T00:41",
            time_closed: "2016-02-10T01:33",
            time_created: "2016-02-10T00:40"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 88,
            time_accepted: "2016-02-10T00:41",
            time_closed: "2016-02-10T01:33",
            time_created: "2016-02-10T00:40"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 90,
            time_accepted: "2016-02-10T00:41",
            time_closed: "2016-02-10T01:33",
            time_created: "2016-02-10T00:40"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 10,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 45,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 50,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 51,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 53,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 58,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 70,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 75,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 97,
            time_accepted: "2016-11-14T00:37",
            time_closed: "2016-11-14T01:29",
            time_created: "2016-11-14T00:36"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 2,
            time_accepted: "2016-07-19T00:13",
            time_closed: "2016-07-19T01:05",
            time_created: "2016-07-19T00:12"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 9,
            time_accepted: "2016-07-19T00:13",
            time_closed: "2016-07-19T01:05",
            time_created: "2016-07-19T00:12"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 29,
            time_accepted: "2016-07-19T00:13",
            time_closed: "2016-07-19T01:05",
            time_created: "2016-07-19T00:12"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 61,
            time_accepted: "2016-07-19T00:13",
            time_closed: "2016-07-19T01:05",
            time_created: "2016-07-19T00:12"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 74,
            time_accepted: "2016-07-19T00:13",
            time_closed: "2016-07-19T01:05",
            time_created: "2016-07-19T00:12"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 5,
            time_accepted: "2017-01-01T00:01",
            time_closed: "2017-01-01T00:53",
            time_created: "2017-01-01T00:00"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 6,
            time_accepted: "2017-01-01T00:01",
            time_closed: "2017-01-01T00:53",
            time_created: "2017-01-01T00:00"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 18,
            time_accepted: "2017-01-01T00:01",
            time_closed: "2017-01-01T00:53",
            time_created: "2017-01-01T00:00"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 34,
            time_accepted: "2017-01-01T00:01",
            time_closed: "2017-01-01T00:53",
            time_created: "2017-01-01T00:00"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 48,
            time_accepted: "2017-01-01T00:01",
            time_closed: "2017-01-01T00:53",
            time_created: "2017-01-01T00:00"
          }
        ]
      ],
      averageHandleTime: { min: 9, sec: 8 }
    },
    getters: {
      /* Returns the appropriate LabTA based on the query */
      getLabTAs: state => query => {},
      /* Returns the labta with the corresponding netid */
      getLabTA: state => netid => {},
      /* Get Self */
      getSelf: state => query => {},
      /* Returns the appropriate request based on the query */
      getRequests: state => query => {},
      /* Returns the request with the corresponding pk */
      getRequest: state => netid => {},
      /* Returns the most recent requests of shifts*/
      getMostRecentShiftRequests: state => count => {
        let slicedShiftRequests = state.shiftRequests.slice(
          state.shiftRequests.length - count
        );
        return slicedShiftRequests;
      },
      getMostRecentShiftNumber: state => {
        console.log(state.shiftRequests.length);
        return state.shiftRequests.length;
      },
      getAverageHandleTime: state => {
        return (
          state.averageHandleTime.min +
          "min " +
          state.averageHandleTime.sec +
          "sec"
        );
      }
    },
    mutations: {
      /* Sets each of the labTAs to the store */
      setLabTAs(state, labTAs) {
        labTAs.forEach(labTA => {
          context.commit("setLabTA", labTA);
        });
      },
      /* Sets a LabTA to store. labTas with netid as key and the item itself as value */
      setLabTA(state, labTA) {
        state.labTAs[labTA.netid] = labTA;
      },
      /* Sets each request in requests to the store */
      setRequests(state, requests) {
        requests.forEach(request => {
          context.commit("setRequest", request);
        });
      },
      /* Sets a request to store. */
      setRequest(state, request) {
        state.requests[request.pk] = request;
      }
    },
    actions: {
      ...apis
    }
  });

export default store;
