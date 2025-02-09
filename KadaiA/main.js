const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "津田塾大学は華氏94度だったので :insertx: は散歩に出かけた。 :insertw: 。 :inserty: の所に着くと、二人はしばらく恐怖の目で見つめ、それから :insertz: 。 ボブはその一部始終を見たが、 :insertx: の体重が300ポンドもあることには驚かなかった。 :inserty: ではよく起こることであったのだ。";
const insertW = ["7色の虹が空にかかっていた", "雷が鳴り響いていた", "大きな月が空からのぞいていた"];
const insertX = ["犬夜叉", "飛影", "怪盗キッド"];
const insertY = ["千葉ニュータウン", "箱根温泉", "富士急ハイランド"];
const insertZ = ["何かが爆発した", "ナメクジになって這って逃げた", "ムーンウォークでどこかへ向かった"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  
  const wItem = randomValueFromArray(insertW);
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replace(':insertw:',wItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("ボブ", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.45359237)} kg`;
    const temperature =  `${Math.round((94-32) * 5 / 9)}`;
    newStory = newStory.replace("華氏94", temperature);
    newStory = newStory.replace("300ポンド", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
