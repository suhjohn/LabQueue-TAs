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
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 41,
            shift: 0,
            time_accepted: "2016-01-13T00:43",
            time_closed: "2016-01-13T01:14",
            time_created: "2016-01-13T00:41"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 80,
            shift: 0,
            time_accepted: "2016-01-13T00:23",
            time_closed: "2016-01-13T00:40",
            time_created: "2016-01-13T00:21"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 83,
            shift: 0,
            time_accepted: "2016-01-13T03:57",
            time_closed: "2016-01-13T04:39",
            time_created: "2016-01-13T03:51"
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
            pk: 18,
            shift: 1,
            time_accepted: "2017-07-03T03:35",
            time_closed: "2017-07-03T03:43",
            time_created: "2017-07-03T03:31"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 38,
            shift: 1,
            time_accepted: "2017-07-03T00:56",
            time_closed: "2017-07-03T01:39",
            time_created: "2017-07-03T00:52"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 39,
            shift: 1,
            time_accepted: "2017-07-03T03:49",
            time_closed: "2017-07-03T04:33",
            time_created: "2017-07-03T03:42"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 66,
            shift: 1,
            time_accepted: "2017-07-03T00:20",
            time_closed: "2017-07-03T00:43",
            time_created: "2017-07-03T00:16"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 74,
            shift: 1,
            time_accepted: "2017-07-03T03:45",
            time_closed: "2017-07-03T04:35",
            time_created: "2017-07-03T03:42"
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
            shift: 1,
            time_accepted: "2017-07-03T02:36",
            time_closed: "2017-07-03T03:25",
            time_created: "2017-07-03T02:31"
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
            pk: 5,
            shift: 2,
            time_accepted: "2017-07-11T03:34",
            time_closed: "2017-07-11T04:02",
            time_created: "2017-07-11T03:24"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 15,
            shift: 2,
            time_accepted: "2017-07-11T00:56",
            time_closed: "2017-07-11T01:52",
            time_created: "2017-07-11T00:52"
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
            shift: 2,
            time_accepted: "2017-07-11T01:31",
            time_closed: "2017-07-11T02:26",
            time_created: "2017-07-11T01:30"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 2,
            shift: 3,
            time_accepted: "2017-05-10T02:04",
            time_closed: "2017-05-10T02:49",
            time_created: "2017-05-10T01:58"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 12,
            shift: 3,
            time_accepted: "2017-05-10T03:09",
            time_closed: "2017-05-10T03:18",
            time_created: "2017-05-10T03:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 16,
            shift: 3,
            time_accepted: "2017-05-10T00:07",
            time_closed: "2017-05-10T00:56",
            time_created: "2017-05-10T00:03"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 35,
            shift: 3,
            time_accepted: "2017-05-10T01:37",
            time_closed: "2017-05-10T02:38",
            time_created: "2017-05-10T01:35"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 52,
            shift: 3,
            time_accepted: "2017-05-10T03:50",
            time_closed: "2017-05-10T03:59",
            time_created: "2017-05-10T03:40"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 56,
            shift: 3,
            time_accepted: "2017-05-10T03:09",
            time_closed: "2017-05-10T03:23",
            time_created: "2017-05-10T03:01"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 64,
            shift: 3,
            time_accepted: "2017-05-10T02:39",
            time_closed: "2017-05-10T03:24",
            time_created: "2017-05-10T02:32"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 65,
            shift: 3,
            time_accepted: "2017-05-10T00:27",
            time_closed: "2017-05-10T01:30",
            time_created: "2017-05-10T00:21"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 92,
            shift: 3,
            time_accepted: "2017-05-10T00:43",
            time_closed: "2017-05-10T01:48",
            time_created: "2017-05-10T00:35"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 0,
            shift: 4,
            time_accepted: "2016-07-26T03:00",
            time_closed: "2016-07-26T03:33",
            time_created: "2016-07-26T02:52"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 9,
            shift: 4,
            time_accepted: "2016-07-26T03:28",
            time_closed: "2016-07-26T04:08",
            time_created: "2016-07-26T03:18"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 10,
            shift: 4,
            time_accepted: "2016-07-26T03:27",
            time_closed: "2016-07-26T04:37",
            time_created: "2016-07-26T03:21"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 19,
            shift: 4,
            time_accepted: "2016-07-26T00:54",
            time_closed: "2016-07-26T01:19",
            time_created: "2016-07-26T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 51,
            shift: 4,
            time_accepted: "2016-07-26T03:16",
            time_closed: "2016-07-26T03:44",
            time_created: "2016-07-26T03:10"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 81,
            shift: 4,
            time_accepted: "2016-07-26T02:16",
            time_closed: "2016-07-26T03:08",
            time_created: "2016-07-26T02:06"
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
            pk: 6,
            shift: 5,
            time_accepted: "2016-03-23T03:34",
            time_closed: "2016-03-23T04:24",
            time_created: "2016-03-23T03:30"
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
            shift: 5,
            time_accepted: "2016-03-23T01:12",
            time_closed: "2016-03-23T01:43",
            time_created: "2016-03-23T01:05"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 27,
            shift: 5,
            time_accepted: "2016-03-23T00:48",
            time_closed: "2016-03-23T00:56",
            time_created: "2016-03-23T00:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 32,
            shift: 5,
            time_accepted: "2016-03-23T01:16",
            time_closed: "2016-03-23T01:53",
            time_created: "2016-03-23T01:07"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 59,
            shift: 5,
            time_accepted: "2016-03-23T02:52",
            time_closed: "2016-03-23T03:42",
            time_created: "2016-03-23T02:49"
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
            shift: 5,
            time_accepted: "2016-03-23T02:02",
            time_closed: "2016-03-23T02:47",
            time_created: "2016-03-23T01:52"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 76,
            shift: 5,
            time_accepted: "2016-03-23T03:21",
            time_closed: "2016-03-23T03:26",
            time_created: "2016-03-23T03:14"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 98,
            shift: 5,
            time_accepted: "2016-03-23T00:11",
            time_closed: "2016-03-23T01:05",
            time_created: "2016-03-23T00:04"
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
            shift: 6,
            time_accepted: "2016-02-15T00:21",
            time_closed: "2016-02-15T01:12",
            time_created: "2016-02-15T00:19"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 8,
            shift: 6,
            time_accepted: "2016-02-15T01:14",
            time_closed: "2016-02-15T02:05",
            time_created: "2016-02-15T01:05"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 17,
            shift: 6,
            time_accepted: "2016-02-15T02:05",
            time_closed: "2016-02-15T02:10",
            time_created: "2016-02-15T02:04"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 29,
            shift: 6,
            time_accepted: "2016-02-15T03:38",
            time_closed: "2016-02-15T04:41",
            time_created: "2016-02-15T03:31"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 30,
            shift: 6,
            time_accepted: "2016-02-15T00:56",
            time_closed: "2016-02-15T02:01",
            time_created: "2016-02-15T00:53"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 31,
            shift: 6,
            time_accepted: "2016-02-15T01:19",
            time_closed: "2016-02-15T01:31",
            time_created: "2016-02-15T01:13"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 37,
            shift: 6,
            time_accepted: "2016-02-15T00:12",
            time_closed: "2016-02-15T00:23",
            time_created: "2016-02-15T00:05"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 46,
            shift: 6,
            time_accepted: "2016-02-15T02:39",
            time_closed: "2016-02-15T03:18",
            time_created: "2016-02-15T02:36"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 47,
            shift: 6,
            time_accepted: "2016-02-15T03:45",
            time_closed: "2016-02-15T04:40",
            time_created: "2016-02-15T03:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 54,
            shift: 6,
            time_accepted: "2016-02-15T00:19",
            time_closed: "2016-02-15T01:18",
            time_created: "2016-02-15T00:11"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 73,
            shift: 6,
            time_accepted: "2016-02-15T03:40",
            time_closed: "2016-02-15T04:06",
            time_created: "2016-02-15T03:38"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 75,
            shift: 6,
            time_accepted: "2016-02-15T00:16",
            time_closed: "2016-02-15T01:08",
            time_created: "2016-02-15T00:08"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 77,
            shift: 6,
            time_accepted: "2016-02-15T02:37",
            time_closed: "2016-02-15T03:20",
            time_created: "2016-02-15T02:28"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 86,
            shift: 6,
            time_accepted: "2016-02-15T02:08",
            time_closed: "2016-02-15T02:42",
            time_created: "2016-02-15T02:07"
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
            pk: 22,
            shift: 7,
            time_accepted: "2016-09-09T00:21",
            time_closed: "2016-09-09T00:45",
            time_created: "2016-09-09T00:19"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 33,
            shift: 7,
            time_accepted: "2016-09-09T03:50",
            time_closed: "2016-09-09T04:04",
            time_created: "2016-09-09T03:49"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 53,
            shift: 7,
            time_accepted: "2016-09-09T01:50",
            time_closed: "2016-09-09T02:30",
            time_created: "2016-09-09T01:41"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 58,
            shift: 7,
            time_accepted: "2016-09-09T03:27",
            time_closed: "2016-09-09T03:37",
            time_created: "2016-09-09T03:25"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 69,
            shift: 7,
            time_accepted: "2016-09-09T00:36",
            time_closed: "2016-09-09T01:42",
            time_created: "2016-09-09T00:33"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 87,
            shift: 7,
            time_accepted: "2016-09-09T03:52",
            time_closed: "2016-09-09T04:30",
            time_created: "2016-09-09T03:51"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 93,
            shift: 7,
            time_accepted: "2016-09-09T03:49",
            time_closed: "2016-09-09T04:26",
            time_created: "2016-09-09T03:45"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 21,
            shift: 8,
            time_accepted: "2016-05-17T01:03",
            time_closed: "2016-05-17T01:09",
            time_created: "2016-05-17T00:57"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 23,
            shift: 8,
            time_accepted: "2016-05-17T00:31",
            time_closed: "2016-05-17T01:24",
            time_created: "2016-05-17T00:30"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 40,
            shift: 8,
            time_accepted: "2016-05-17T01:03",
            time_closed: "2016-05-17T02:13",
            time_created: "2016-05-17T01:00"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 42,
            shift: 8,
            time_accepted: "2016-05-17T03:30",
            time_closed: "2016-05-17T04:36",
            time_created: "2016-05-17T03:29"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 43,
            shift: 8,
            time_accepted: "2016-05-17T02:12",
            time_closed: "2016-05-17T03:07",
            time_created: "2016-05-17T02:09"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 60,
            shift: 8,
            time_accepted: "2016-05-17T00:51",
            time_closed: "2016-05-17T01:09",
            time_created: "2016-05-17T00:48"
          }
        ],
        [
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 24,
            shift: 9,
            time_accepted: "2018-03-20T03:16",
            time_closed: "2018-03-20T03:42",
            time_created: "2018-03-20T03:13"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 44,
            shift: 9,
            time_accepted: "2018-03-20T00:06",
            time_closed: "2018-03-20T00:55",
            time_created: "2018-03-20T00:02"
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
            shift: 9,
            time_accepted: "2018-03-20T02:31",
            time_closed: "2018-03-20T03:20",
            time_created: "2018-03-20T02:28"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 50,
            shift: 9,
            time_accepted: "2018-03-20T00:24",
            time_closed: "2018-03-20T01:28",
            time_created: "2018-03-20T00:20"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 70,
            shift: 9,
            time_accepted: "2018-03-20T03:39",
            time_closed: "2018-03-20T03:57",
            time_created: "2018-03-20T03:31"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 82,
            shift: 9,
            time_accepted: "2018-03-20T01:12",
            time_closed: "2018-03-20T01:29",
            time_created: "2018-03-20T01:02"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 91,
            shift: 9,
            time_accepted: "2018-03-20T01:48",
            time_closed: "2018-03-20T02:46",
            time_created: "2018-03-20T01:44"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 95,
            shift: 9,
            time_accepted: "2018-03-20T02:25",
            time_closed: "2018-03-20T03:23",
            time_created: "2018-03-20T02:20"
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
            pk: 26,
            shift: 10,
            time_accepted: "2016-02-27T02:24",
            time_closed: "2016-02-27T03:31",
            time_created: "2016-02-27T02:23"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 63,
            shift: 10,
            time_accepted: "2016-02-27T01:55",
            time_closed: "2016-02-27T02:04",
            time_created: "2016-02-27T01:52"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 78,
            shift: 10,
            time_accepted: "2016-02-27T02:13",
            time_closed: "2016-02-27T02:45",
            time_created: "2016-02-27T02:09"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 85,
            shift: 10,
            time_accepted: "2016-02-27T02:09",
            time_closed: "2016-02-27T03:16",
            time_created: "2016-02-27T01:59"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 94,
            shift: 10,
            time_accepted: "2016-02-27T03:55",
            time_closed: "2016-02-27T04:26",
            time_created: "2016-02-27T03:48"
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
            pk: 1,
            shift: 11,
            time_accepted: "2016-01-25T03:36",
            time_closed: "2016-01-25T04:27",
            time_created: "2016-01-25T03:33"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 3,
            shift: 11,
            time_accepted: "2016-01-25T01:33",
            time_closed: "2016-01-25T02:34",
            time_created: "2016-01-25T01:32"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 7,
            shift: 11,
            time_accepted: "2016-01-25T02:15",
            time_closed: "2016-01-25T03:10",
            time_created: "2016-01-25T02:07"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 11,
            shift: 11,
            time_accepted: "2016-01-25T01:54",
            time_closed: "2016-01-25T01:59",
            time_created: "2016-01-25T01:52"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 20,
            shift: 11,
            time_accepted: "2016-01-25T04:02",
            time_closed: "2016-01-25T04:23",
            time_created: "2016-01-25T03:59"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 67,
            shift: 11,
            time_accepted: "2016-01-25T03:21",
            time_closed: "2016-01-25T03:47",
            time_created: "2016-01-25T03:17"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 88,
            shift: 11,
            time_accepted: "2016-01-25T03:35",
            time_closed: "2016-01-25T04:17",
            time_created: "2016-01-25T03:25"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 89,
            shift: 11,
            time_accepted: "2016-01-25T03:00",
            time_closed: "2016-01-25T03:56",
            time_created: "2016-01-25T02:57"
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
            pk: 34,
            shift: 12,
            time_accepted: "2017-09-08T03:43",
            time_closed: "2017-09-08T04:01",
            time_created: "2017-09-08T03:38"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 68,
            shift: 12,
            time_accepted: "2017-09-08T01:08",
            time_closed: "2017-09-08T01:40",
            time_created: "2017-09-08T01:06"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 96,
            shift: 12,
            time_accepted: "2017-09-08T03:25",
            time_closed: "2017-09-08T04:07",
            time_created: "2017-09-08T03:24"
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
            pk: 45,
            shift: 13,
            time_accepted: "2018-01-15T03:27",
            time_closed: "2018-01-15T03:52",
            time_created: "2018-01-15T03:20"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 49,
            shift: 13,
            time_accepted: "2018-01-15T03:36",
            time_closed: "2018-01-15T04:30",
            time_created: "2018-01-15T03:28"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Alistair MacDiarmid",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 55,
            shift: 13,
            time_accepted: "2018-01-15T01:42",
            time_closed: "2018-01-15T02:04",
            time_created: "2018-01-15T01:33"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 57,
            shift: 13,
            time_accepted: "2018-01-15T03:12",
            time_closed: "2018-01-15T04:14",
            time_created: "2018-01-15T03:06"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 71,
            shift: 13,
            time_accepted: "2018-01-15T03:40",
            time_closed: "2018-01-15T04:07",
            time_created: "2018-01-15T03:35"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Michael Liapin",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 72,
            shift: 13,
            time_accepted: "2018-01-15T00:14",
            time_closed: "2018-01-15T00:25",
            time_created: "2018-01-15T00:12"
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
            shift: 13,
            time_accepted: "2018-01-15T03:07",
            time_closed: "2018-01-15T03:54",
            time_created: "2018-01-15T03:06"
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
            pk: 13,
            shift: 14,
            time_accepted: "2017-12-20T02:17",
            time_closed: "2017-12-20T03:27",
            time_created: "2017-12-20T02:11"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 25,
            shift: 14,
            time_accepted: "2017-12-20T03:00",
            time_closed: "2017-12-20T03:48",
            time_created: "2017-12-20T02:52"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 28,
            shift: 14,
            time_accepted: "2017-12-20T03:58",
            time_closed: "2017-12-20T04:34",
            time_created: "2017-12-20T03:49"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Allan Korir",
            closer_username: "ssuh",
            course: "cos226",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 36,
            shift: 14,
            time_accepted: "2017-12-20T03:11",
            time_closed: "2017-12-20T04:02",
            time_created: "2017-12-20T03:09"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Sofia Quevedo",
            closer_username: "ssuh",
            course: "cos126",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 84,
            shift: 14,
            time_accepted: "2017-12-20T02:09",
            time_closed: "2017-12-20T02:29",
            time_created: "2017-12-20T02:08"
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
            shift: 14,
            time_accepted: "2017-12-20T02:44",
            time_closed: "2017-12-20T03:31",
            time_created: "2017-12-20T02:41"
          },
          {
            acceptor_netid: "ssuh",
            author_full_name: "Christine Lu",
            closer_username: "ssuh",
            course: "cos217",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            location: "",
            pk: 99,
            shift: 14,
            time_accepted: "2017-12-20T01:37",
            time_closed: "2017-12-20T02:21",
            time_created: "2017-12-20T01:29"
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
      getNRecentShiftsRequests: state => count => {
        let slicedShiftRequests = state.shiftRequests.slice(
          state.shiftRequests.length - count
        );
        return slicedShiftRequests;
      },
      /* Returns the most recent shift of the labTA.
         If the labTA has worked for 15 shifts throughout his/her 
         entire career, return 15. */
      getMostRecentShiftNumber: state => {
        return state.shiftRequests.length;
      },
      /* Returns the average handle time of the labTA */
      getAverageHandleTime: state => {
        return (
          state.averageHandleTime.min +
          "min " +
          state.averageHandleTime.sec +
          "sec"
        );
      },
      /* Returns the total number of requests of the most recent n shifts */
      getTotalRequestsOfNRecentShifts: (state, getters) => count => {
        const slicedShiftRequests = getters.getNRecentShiftsRequests(count);
        return slicedShiftRequests.reduce(
          (acc, element) => acc + element.length,
          0
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
