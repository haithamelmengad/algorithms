# Backend Interview Questions

Implement these tasks purely on the server side. Wherever necessary you can use dummy data to fill out the contents.

Each question has multiple stages. Complete them one at a time. If you get stuck, you can skip to the next question.

Guidelines:

- Don't worry about frontend integration.
- You are welcome to Google, but **don't copy paste code.**

## Main Questions

### Question 1: Database seeding

Database seeding is the **initial seeding** of a database with data. This is often an automated process that is executed upon the initial setup of an application. The data can be dummy data or necessary data such as an initial administrator account.

Your goal for this question is to write a script to read [`interview-prep/questions/data.txt`](./data.txt), extract out products, and insert all of them into the Mongo database as documents. You can use [mongoose]() or [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) to achieve this.

#### Specifications:

A product entity is given as the following:

```
<ProductName:Macbook Pro|ProductPrice:1000|ProductQuantity:20>
```

- All product names are alphanumeric and are **not unique**.
- Both product price and product quantity are always numeric.
- If a product name occurs more than once, combine all matching products into a single product object by summing the `ProductQuantity` fields and averaging the `ProductPrice`s.
- None of the fields will be missing.

You will need to use [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to extract out those products.

> A script is a program that executes a specific task when run. You can run scripts written in JavaScript calling them with `node` like so: `node sample.js`

#### Follow up questions:

- Can you insert data with just a single Mongo insert query?
- Can you write the script so that it accepts a file name as a parameter? (i.e. `node script.js data.txt`)
- What can you do so that we can run the script without the `node` command and the .js extension? (i.e. `./script data.txt`)

#### Bonus:

- Read up about database migration and how it works.

### Question 2: Sending emails

Now let's read products from MongoDB, calculate the total value of all products and the total quantity, and send this summary information to a pre-defined email address. You can use [node-mailer](https://github.com/nodemailer/nodemailer) to send email.

#### Specifications:

You should get approximately the totals in the following email:

```
Hello,

Here's a summary of your inventory:
- Products count: 200
- Total price: $872,702
- Total quantity: 9034

Cheers,
Horizons
```

### Question 3: Wake your Heroku app up!

Free Heroku apps automatically go to sleep after a period of inactivity and this can make free Heroku apps slow.
Let's write a script to keep these apps awake so that they are always fast. This script should send a request to
a list of given Heroku URLs every 5 minutes.
You may find the [axios](https://www.npmjs.com/package/axios) module to be useful.

## Links and Resources

1. [http://rubular.com/](http://rubular.com/)
