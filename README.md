# simple-web-translations

Super simple, dependency-free JS framework for translating web pages.

Features include default text values for browsers without javascript support and easy setup and configuration, also for existing websites.
Generally intended for smaller web pages with low amount of supported languages (not performance-optimized).

## Usage Instructions

#### 1. Add include
Include simple-translation-dictionaries.js and simple-web-simple-translation-dictionaries.js into your page:
```html
<script type="text/javascript" src="simple-translation-dictionaries.js"></script>
<script type="text/javascript" src="simple-web-simple-translation-dictionaries.js"></script>
```

#### 2. Tag elements to translate
To all HTML elements containing text to translate...
- add ``translation`` to the list of css classes
- add the html attribute ``data-translationkey`` and set its value to a globally unique string identifying the text to translate.

This results in HTML tags of the form:
```html
<li class="translation" data-translationkey="mainbody.list.first">The first item in your list</li>
```
The HTML element of the tag does not matter.

#### 3. Create the dictionaries
Open the web developer tools on the updated page, switch to console and execute the function ``parsePageToDictionary()``.
This will output all detected translation keys and the values from the website to the console.

Copy the output, and paste it to the ``simple-translation-dictionaries.js`` file, once for every supported language.
Rename and modify each copy to contain the correct translations for each language.
Refer to the current content of the file in conjunction with the example.html test page for further reference.
Delete the entries ``translationDictionaries['de_DE']`` and ``translationDictionaries['en_GB']`` if not needed and not overwritten.

#### 4. Add language buttons
Somewhere on your page, add a button for every supported language.
The button needs to call the ``setLanguage(languageCode)`` function when clicked and pass the correct code of the language to use.
Example:
````html
<button onclick="setLanguage('de_DE')">DE</button>
<button onclick="setLanguage('en_GB')">EN</button>
````

#### 5. Done
Having done all these steps, your translation system is ready to use.

## Multiple pages

If your web site is not a one-pages and is therefore split-up into multiple HTML files, you can use multiple dictionaries with different names and include each one only the page where it is used.
The simplifies maintenance (as dictionaries can simply be re-generated after page midifications) and improves page load performance. 
