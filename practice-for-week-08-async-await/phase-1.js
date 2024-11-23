function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

// refactor this function to handle Promises using async/await instead of
// .then and .catch
 function workout() {
  /**
   * Asynchronously performs a workout routine by stretching, running on treadmill, and lifting weights.
   */
  async function stretch() {
    try {
      // Wait for stretching to complete
      await runOnTreadmill();
      // Wait for running on treadmill to complete
      await liftWeights();
      // Wait for lifting weights to complete
    } catch (err) {
      // Handle any errors that occur during the workout
      console.log(err);
    }
  }
  console.log("done working out")
    .catch((err) => console.log(err));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out