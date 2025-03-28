# speak En

This project is a simple HTML and JavaScript application designed as a dictation tool for English learners. It provides an interactive table displaying bilingual text (Japanese and English) with a speech synthesis feature, allowing users to improve their listening and comprehension skills.

## Features

- **Bilingual Table**: Displays text in both Japanese and English.
- **Speech Synthesis**: Clickable buttons to read English text aloud using the Web Speech API, aiding in pronunciation and listening practice.
- **Automatic Row Numbering**: Automatically numbers each data row in the table.
- **Responsive Design**: Styled with CSS for a clean and responsive layout.

## Purpose

This application serves as a dictation tool for English learners, helping them to:

- **Improve Listening Skills**: By listening to the English text read aloud, learners can enhance their ability to understand spoken English.
- **Practice Pronunciation**: Hearing the correct pronunciation of words aids in developing better speaking skills.
- **Enhance Vocabulary**: Exposure to new words and phrases in context helps expand vocabulary.

## Getting Started

### Usage

- **Play Audio**: Click the 🔊 button next to any English text to hear it spoken aloud. This can be used for dictation practice by listening and writing down what you hear.
- **Scroll to Top**: Use the "このページのトップへ" link to quickly navigate back to the top of the page.

## Code Overview

- **HTML**: Defines the structure of the page, including the table layout.
- **CSS**: Provides styling for the page and table.
- **JavaScript**: Handles the speech synthesis functionality and automatic row numbering.

### JavaScript Highlights

- **Speech Synthesis**: Utilizes the `SpeechSynthesisUtterance` object to read English text aloud.
- **Event Handling**: Uses jQuery to manage click events on the speaker buttons.
- **Dynamic Row Numbering**: Automatically assigns numbers to each row, excluding the header.

## Future Enhancements

- **Dynamic Table Generation**: Integrate a feature to dynamically generate the table from an Excel or CSV file.
- **Enhanced Speech Options**: Allow users to adjust speech rate and language settings.
- **Improved Accessibility**: Add ARIA roles and attributes for better screen reader support.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **jQuery**: For simplifying DOM manipulation and event handling.
- **Web Speech API**: For providing the speech synthesis functionality.

This application is a valuable tool for English learners seeking to improve their language skills through dictation practice. Enjoy using the speak En application!