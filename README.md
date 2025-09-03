# 🌡️ Angular Pipes Deep Dive

> 🎯 Quickdraw Achievement: Successfully merged a PR within 5 minutes!

<div align="center">
  <img src="public/temp-icon.png" alt="Temperature" style="height: 160px;" />
  <p>
    <a href="https://github.com/TihomirDenev/pipes-deep-dive" target="_blank">View on GitHub</a>
  </p>
</div>

# 📝 Description

This project demonstrates the power and flexibility of Angular Pipes through practical examples. It showcases both built-in and custom pipes in an interactive temperature conversion application.

# 🔎 Example

The application demonstrates:
- Built-in pipes: `DatePipe`, `DecimalPipe`
- Custom pipes: `TemperaturePipe`, `SortPipe`
- Pipe parameters and chaining
- Pure vs impure pipes

# 🗃️ Technologies Used

- **Angular 18**: For building a responsive single-page application
- **TypeScript**: For type-safe application development
- **CSS**: For clean and responsive design
- **RxJS**: For reactive programming patterns

# 💡 Features

- **Temperature Conversion**: Convert between Celsius and Fahrenheit
- **Date Formatting**: Display dates in a user-friendly format
- **Sorting**: Sort temperature data in ascending or descending order
- **Interactive UI**: Click to reset temperature values

# 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/TihomirDenev/pipes-deep-dive.git
```

2. Navigate to the project directory:

```bash
cd pipes-deep-dive
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`

# 📦 Custom Pipes

## TemperaturePipe
Converts temperature values between Celsius and Fahrenheit:

```typescript
// Usage in template
{{ temperature | temp:'cel':'fah' }}  // Convert from Celsius to Fahrenheit
{{ temperature | temp:'fah':'cel' }}  // Convert from Fahrenheit to Celsius
```

## SortPipe
Sorts arrays in ascending or descending order (impure pipe):

```typescript
// Usage in template
{{ array | sort:'asc' }}  // Sort ascending
{{ array | sort:'desc' }} // Sort descending
```

# 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```bash
npm run start
```

5. Open localhost link in browser to view web-platform.

# ✨ Contributing

- I welcome contributions to the Place Picker project! If you have suggestions, feel free to open an issue or submit a pull request.

# 📇 License

- This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
