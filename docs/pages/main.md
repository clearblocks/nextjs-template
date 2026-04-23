# Main page

The main page is a single page containing the complete website for customers of the ironing service irongirl.nl. Users come to the website to find out what services irongirl.nl provides, where it is located and how the pricing works. They can also fill in a contact form.

## Figma:

...

## Translations:

All texts are in translation files, with useTranslations from 'next-intl' with keys referring to texts in message files for english and dutch. The texts taken from Figma should be put in messages/nl.json and the english translation should be generated and put in messages/en.json. A generated key should be used in the components to refer to the texts.

## Layout structure:

The page is composed of several blocks that are stacked vertically. I will describe each block.

### Header

Contains the logo on the right side. It should also contain the LanguageSwitcher, although this is not present in the Figma design.

### Footer

Contains a copyright notice, the address and a Google Maps Icon. Clicking on the icon will open the address in Google Maps
