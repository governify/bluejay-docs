---
title: Extending Bluejay documentation
description: This section explains how to extend Bluejay documentation.
hide_table_of_contents: false
---

# Extending Bluejay documentation

## Introduction

In this section you will find all the information you need in order to extend this documentation.

## How can I contribute?

If you have noticed an error or you simply would like to explain thing better, contributions are always wellcome. Before proceeding please consider checking official repository status because your suggestions might be in process of being included. Take into account that this repository is in continous developement and it received updates when things change.

## Contribution process

Contributing to documentation is very simple, you will have to follow this process.

### Before contributing

Please bear in mind that Bluejay is an instance of Governify, so here you will find only specific content related with Bluejay. If you want to extend or improve Governify check its [official documentation](https://docs.governify.io/) and think first if your contributions should be there or here.

### 1. Forking official repo

In order to develop anything, you will have to fork [bluejay documentation](https://github.com/governify/bluejay-docs) repository. Do not forget to fork the ***develop*** branch. Then, clone the fork in your local machine. Check the README.md file to have some idea about running the project.

### 2. Adding documentation

Feel free to improve all the documents but follow [CONVENTIONAL COMMITS v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) and take care of the style and lint in your md files. It is very important to keep documentation alive, so ***DO NOT*** remove images or old sections. You ***mustn't remove versioned_docs folder*** becuse there is where the older versions of the documentation are located.

### Other considerations

#### Images

When referencing an image, ***do not*** use its relative route. Instead, use the absoulute route given by Docusaurus. Let's see an example:

```md
 ![Setup Wizard](/img/deployment/setup_wizard_main.png)
```

This is the correct way to add images because Docusaurus will take the route assuming the ***/*** is the ***/static*** directory. If you use relative routes the system will work properly, but when versioning the docs it will not compile or build because the relative routes inside /versioned_docs will change. In conclusion, import the images as specified in the example.

#### Versioned docs

Everything you will find inside **versioned_docs** cannot be changed because it serves as a record of old versions of the documentation. Do not change them. In case that you want to change some images, add a new one and name it differently from the added before, so both versions can cohexist. Let's see an example:

Imagine that there is an image called ***test.png*** referenced in example.md. You will see this in the file:

```md
 ![Test image](/img/test.png)
```

You notive that this image needs an update. No problem. Add the new image and name it in a proper way. For example: testv2.png. Now, in example.md you will have to change the url like this:

```md
 ![Test image](/img/testv2.png)
```

This way, in the older version of the documentation we will keep the old image, whereas in the newest we will have yours.

---
