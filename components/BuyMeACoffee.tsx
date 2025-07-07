/* eslint-disable @next/next/no-img-element */
// components/BuyMeACoffeeButton.tsx
export default function BuyMeACoffeeButton() {
  return (
    <a
      href="https://www.buymeacoffee.com/valscii"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=valscii&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
        alt="Buy Me A Coffee"
        style={{ height: '60px', width: '217px' }}
      />
    </a>
  );
}