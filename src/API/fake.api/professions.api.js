export const professionsObject = {
  doctor: {_id: "67rdca3eeb7f6fgeed471818", name: "Доктор"},
  waiter: {_id: "67rdca3eeb7f6fgeed471820", name: "Официант"},
  physics: {_id: "67rdca3eeb7f6fgeed471814", name: "Физик"},
  engineer: {_id: "67rdca3eeb7f6fgeed471822", name: "Инженер"},
  actor: {_id: "67rdca3eeb7f6fgeed471824", name: "Актер"},
  cook: {_id: "67rdca3eeb7f6fgeed471829", name: "Повар"},
};
export const professions = [
  {_id: "67rdca3eeb7f6fgeed471818", name: "Доктор"},
  {_id: "67rdca3eeb7f6fgeed471820", name: "Официант"},
  {_id: "67rdca3eeb7f6fgeed471814", name: "Физик"},
  {_id: "67rdca3eeb7f6fgeed471822", name: "Инженер"},
  {_id: "67rdca3eeb7f6fgeed471824", name: "Актер"},
  {_id: "67rdca3eeb7f6fgeed471829", name: "Повар"},
];
if (!localStorage.getItem("professions")) {
  localStorage.setItem("professions", JSON.stringify(professions));
}

const fetchAllProfessions = () => new Promise((resolve) => {
       window.setTimeout(function() {
          resolve(professions)
        },2000)
    })
const getProfessionIdByName = (name) =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(
                JSON.parse(localStorage.getItem("professions")).find(
                    (prof) => prof.name === name,
                ),
            );
        }, 1000);
    });
export default {
  fetchAllProfessions,
  getProfessionIdByName,
}
