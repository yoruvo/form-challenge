[View the project on GitHub Pages](https://yoruvo.github.io/form-challenge)

## Form challenge project

This is a personal project to practice working with React, with a focus on creating forms.

### Challenge outlines

I will be creating a complete form with conditional fields and extra features using TypeScript.

The challenge follows a very precise definition outlining all the required features.

I will labour to add additional steps which aid in development or demonstrate good coding etiquette, such
as adding this readme, configuring linting and formatting tools for clean output etc.

Progress on the challenge will be publically displayed in a GitHub repository.

I will begin work on this challenge with the initial knowledge of **very** basic TypeScript and Node.js
as well as having finished the [Intro to React](https://reactjs.org/tutorial/tutorial.html).

Most other parts of this challenge will be knowledge that I acquire live during coding, using resources
available on the internet.

### Challenge instructions

Create a multi-lingual support form supporting English and German.

There should be a language selection element to switch languages.

The form contains the following fields:

* Name / Name (Text field, initially empty)
* Emailadresse / Email address (Text field, initially empty, validates correct email)
* Themenbereich / Topic (Select field with options "General request", "Software error" and "Return call") 
* Beschreibung / Description (Text area)
* Submit button

If topic "Software error" is chosen, display an additional field below the dropdown which receives a version number.
The version number can be something like `1.0.0` or `1.11.12`. The schema remains `number.number.number`. 

If topic "Return call" is selected, display an additional field which accepts a phone number.

The form should validate the entered data accordingly.

If the form is submitted, the results should display on a result page.

The results are not saved. All fields are required.

### Technology used

I researched the tech I should use and I will start the project with:

* [**Formik**](https://jaredpalmer.com/formik) for the form fields.
* [**Ant Design**](https://ant.design/) for the frontend UI kit, because I don't want a plain HTML page.
* [**formik-antd**](https://github.com/jannikbuschke/formik-antd) to fuse them together.
* [**Yup**](https://github.com/jquense/yup) for form validation.
* [**i18next**](https://www.i18next.com/) for internationalization.
* [**React Router**](https://github.com/ReactTraining/react-router) for the different pages.
* [**Webpack**](https://webpack.js.org/) for bundling.
* [**Jest**](https://jestjs.io/) and [**Enzyme**](https://enzymejs.github.io/enzyme/) for testing.

This list is object to changes during development.

### Development notes

#### Known bugs

* The submit button is initially enabled even though the validation doesn't pass. This is a bug in the
`formik-antd` library which I've reported [in this issue](https://github.com/jannikbuschke/formik-antd/issues/146).

#### `formik-antd` override components

Multiple components from the **formik-antd** library had to be copied and modified for the project to avoid
certain issues with the presentation.

These issues are NOT relevant to general development with Formik, and only exist because of the choice I made in
using Ant Design as a quick styling helper.

#### File size

With a basic Webpack setup, Ant Design dependencies create a MASSIVE file size. This can be optimized further,
but I'm choosing not to pursue this as this project is for learning of React and form basics, not for Ant Design.

### Time log

The majority of time tracking will be done with commits. I will try to track start & stop times here.

Be advised that this is done in my free time and so, accordingly, time will be spent with other matters than work here and there.

**Total estimate time logged**: TODO 
 
#### Tue 2020-05-19

* **17:55**: Project start.
* **19:56**: End work, reason: struggling to match ESLint settings with boilerplate. 

#### Wed 2020-05-20

* **22:26**: Return to some project work.

#### Thu 2020-05-21

* **01:20**: Stop work after fiddling with GitHub Pages. Hopefully up when I wake up!
* **14:53**: Resume work.
* **19:13**: Ending work for the moment.

#### Wed 2020-05-27

* **10:37**: Resuming work after a longer time off, having taken a holiday to finish this.
