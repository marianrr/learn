/**
 * For this problem you will be writing a function capable of finding the volume
 * for a rectangle (height * width * length). In order to enter the
 * required measurements we'll need to measure them one at a time.
 *
 * @param {number} height - The height of the rectangle.
 * @return {function} A function that takes in a width and returns a function that takes in a length.
 */
function recVolume(height) {
  if (typeof height !== 'number' || height <= 0) {
    throw new Error('Height must be a positive number');
  }
  
  let volume;

  const calculateVolume = (width) => {
    if (typeof width !== 'number' || width <= 0) {
      throw new Error('Width must be a positive number');
    }
    
    return (length) => {
      if (typeof length !== 'number' || length <= 0) {
        throw new Error('Length must be a positive number');
      }

      if (typeof volume === 'undefined') {
        volume = height * width * length;
      }
      return volume;
    };
  };

  return calculateVolume;
}

module.exports = recVolume;