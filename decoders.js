const fs = require('fs');

/**
 * Decode an encoded message from a .txt file.
 * @param {string} messageFile - The path to the .txt file containing the encoded message.
 * @returns {string} - The decoded message as a string.
 */
const decode = function(messageFile) {
    // Split the input by newline characters to get an array of lines
    const lines = messageFile.split(/\r?\n/);
    
    // Initialize an empty array to store decoded words
    const decodedWords = [];
    
    // Initialize the current position in the pyramid
    let position = 1;
    
    // Initialize the current level of the pyramid
    let level = 1;
    
    // Iterate over each position in the pyramid
    while (position <= lines.length) {
        // Iterate over each line in the input
        for (let i = 0; i < lines.length; i++) {
            // Split the line into number and word
            const [num, word] = lines[i].split(' ');
            const lineNumber = parseInt(num);
            
            // If the number matches the current position in the pyramid
            if (lineNumber === position) {
                // Push the word into the output array
                decodedWords.push(word);

                // Increment the level for the next iteration
                level++;
                
                // Update the position to the last number of the next level of the pyramid
                position = (level * (level + 1)) / 2;
                
                
                
                
                // Break the loop to move to the next position
                break;
            }
        }
    }
    
    // Join the decoded words into a string separated by spaces
    return decodedWords.join(' ');
};

// Read the content of the encoded message file
const messageFileContent = fs.readFileSync('test.txt', 'utf8');

const input = "10 wont \n 9 you \n8 walk \n7 dot \n6 or \n5 fine \n4 not \n3 they \n2 do \n1 will"

// Decode the message and print the result
console.log(decode(messageFileContent));
console.log(decode(input))
// console.log(messageFileContent)