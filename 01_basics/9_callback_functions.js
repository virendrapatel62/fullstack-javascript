function sendEmail(to, subject, content) {
  console.log(
    `sending email to ${to} , subject : ${subject} and content is : ${content}`
  );
}

function logToDatabase(content) {
  console.log("LOGGING.... content is", content);
}

function placeOrder(product, callback) {
  console.log("placing order....");
  setTimeout(() => {
    callback();
  }, 3000);
}

let callback = () => {
  logToDatabase("Successfully placed an order...");
};

placeOrder("Laptop", callback);

callback = () => {
  sendEmail("patelvirendra62@gmail.com", "Order placed", "Hello Content");
};
placeOrder("Laptop", callback);
