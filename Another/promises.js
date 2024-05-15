//

function getData(dateID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("ID", dateID);
      resolve();
    }, 1000);
  });
}

async function allData() {
  await getData(1);
  await getData(12);
  await getData(13);
}

allData();

function zim = () => {
    return " hi zim khan ";
}

zim()