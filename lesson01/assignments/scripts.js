// jQuery Doc Ready
$(function() {
  // Set up some data and variables
  const data = [1, 2, 3, 4];
  $('.array').text(data);
  // Click event on the submit input
  $('.reduce').on('click', function() {
    // Grab the input value and parse it into a number
    const val = $('.reduce-input').val();
    const num = parseInt(val);
    // Verify the user gave us a re

    if (!isNaN(num)) {
      // Add our new number to the data array
      data.push(num);
      // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
      const sum = data.reduce((acc, curr) => acc + curr);
      // Add our new total to the page
      $('.res1').text(sum);
      // Reset the input value to an empty string
      $('.reduce-input').val('');
      $('.array').text(data);
    }
  });

  $('.forEach').on('click', function() {
    // Grab the input value and parse it into a number
    const val = $('.forEach-input').val();
    const num = parseInt(val);
    const copy = [];
    // Verify the user gave us a real number
    if (!isNaN(num)) {
      // Add our new number to the data array
      data.forEach(item => copy.push(item+num));
      // Add our new total to the page
      $('.res2').text('['+copy+']');
      // Reset the input value to an empty string
      $('.forEach-input').val('');
    }
  });

  $('.map').on('click', function() {
    // Grab the input value and parse it into a number
    const val = $('.map-input').val();
    const num = parseInt(val);
    // Verify the user gave us a real number
    if (!isNaN(num)) {
      // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
      const newArr = data.map(function(val, index){
            return {key:index, value:Math.pow(val,num)};
        })
      // Add our new total to the page
      $('.res3').text(JSON.stringify(newArr));
      // Reset the input value to an empty string
      $('.map-input').val('');
    }
  });

  $('.filter').on('click', function() {
    // Grab the input value and parse it into a number
    const val = $('.filter-input').val();
    const num = parseInt(val);
    // Verify the user gave us a real number
    if (!isNaN(num)) {
      // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
      const result = data.filter(item => item > num);
      // Add our new total to the page
      $('.res4').text(result);
      // Reset the input value to an empty string
      $('.filter-input').val('');
    }
  });
});
