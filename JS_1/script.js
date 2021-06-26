const newYear="1 Jan 2022";

function countDown() {
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const timeLeft=Math.floor(newYearDate-currentDate);
    const totalSecLeft=Math.floor(timeLeft/1000);
    const daysLeft=Math.floor(totalSecLeft/3600/24);
    const hourLeft=Math.floor(totalSecLeft/3600)%24;
    const minsLeft=Math.floor(timeLeft/60)%60;
    const secLeft=Math.floor(timeLeft)%60;
    console.log(secLeft);
    console.log(hourLeft);
    console.log(minsLeft);
}
countDown();