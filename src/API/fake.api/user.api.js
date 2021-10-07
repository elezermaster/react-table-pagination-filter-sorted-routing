import {professionsObject as professions} from "./professions.api";
export const qualities = {
  tedious: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Нудила",
    color: "primary",
  },
  strange: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Странный",
    color: "secondary",
  },
  buller: {_id: "67rdca3eeb7f6fgeed4711012", name: "Троль", color: "success"},
  alcoholic: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "Алкоголик",
    color: "danger",
  },
  handsome: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Красавчик",
    color: "info",
  },
  uncertain: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Неуверенный",
    color: "dark",
  },
};

export const users = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "John Dorian",
    profession: professions.doctor,
    qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
    completedMeetings: 36,
    rate: 2.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Kuks",
    profession: professions.doctor,
    qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
    completedMeetings: 15,
    rate: 2.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Bob Celso",
    profession: professions.doctor,
    qualities: [qualities.buller],
    completedMeetings: 247,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Rachel Grin",
    profession: professions.waiter,
    qualities: [qualities.uncertain],
    completedMeetings: 148,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471819",
    name: "Sheldon Kuper",
    profession: professions.physics,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 37,
    rate: 4.6,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471820",
    name: "Leonardo Hofsted",
    profession: professions.physics,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 147,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471821",
    name: "Hovard Horovich",
    profession: professions.engineer,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 72,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471822",
    name: "Nikola Tesla",
    profession: professions.engineer,
    qualities: [qualities.handsome],
    completedMeetings: 72,
    rate: 5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471823",
    name: "Monica Heller",
    profession: professions.cook,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471824",
    name: "Rachel Hoffer",
    profession: professions.cook,
    qualities: [qualities.handsome, qualities.buller],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed47181f",
    name: "John Tribanni",
    profession: professions.actor,
    qualities: [qualities.uncertain, qualities.strange],
    completedMeetings: 434,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed47181r",
    name: "Bred Pitt",
    profession: professions.actor,
    qualities: [qualities.handsome],
    completedMeetings: 434,
    rate: 5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471341",
    name: "Monica Blumper",
    profession: professions.cook,
    qualities: [qualities.strange, qualities.uncertain, qualities.buller],
    completedMeetings: 12,
    rate: 4.2,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471846",
    name: "Rachel Kim",
    profession: professions.actor,
    qualities: [qualities.handsome, qualities.buller],
    completedMeetings: 10,
    rate: 4.9,
    bookmark: false,
  },
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(users);
        }, 2000);
    });
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(users.find((user) => user._id === id))
    },1000)
  })

export default {
    fetchAll,
    getById,
}
