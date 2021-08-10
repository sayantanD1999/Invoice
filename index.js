var data = [];
var obj = {};
var items = [];
var total_sum = 0;
var counter = 0;
var id_count = 1;
var storage = [];
var local_storage = [];
console.log("hi");
localStorage.setItem("username","NULL");
window.onload=()=>{
  let un = localStorage.getItem("username");
  if (un=="NULL")
  {
    console.log(2);
    document.getElementsByClassName("user_name")[0].style.display = "flex";
  }
}

function set_user_name(){
  
  let un = document.getElementById("username").value.split(" ");
  let user = " ";
  user +=un[0].split("")[0].toUpperCase();
  user +=un[un.length-1].split("")[0].toUpperCase();
  document.getElementById("set_user").innerHTML = user;
  localStorage.setItem("username",user);
  document.getElementsByClassName("user_name")[0].style.display = "none";
  console.log(1);
}

function light_theme() {
  document.body.style.color = "black";
  document.body.style.backgroundColor = "aliceblue";
  document.getElementById("payment_status").style.backgroundColor =
    "rgb(0,0,0,0.5)";
  var invoices = document.getElementsByClassName("invoice");
  for (let i = 0; i < invoices.length; i++) {
    invoices[i].style.backgroundColor = "rgb(210, 210, 210,0.3)";
    invoices[i].style.color = "black";
  }

  var box1 = document.getElementsByClassName("details_div");
  for (let i = 0; i < box1.length; i++) {
    box1[i].style.backgroundColor = "white";
  }

  var box2 = document.querySelectorAll(".invoice_detail_box");
  for (let i = 0; i < box2.length; i++) {
    box2[i].style.backgroundColor = "white";
  }

  document.getElementsByClassName("form")[0].style.color = "aliceblue";
  document.getElementsByTagName("legend")[0].style.color = "aliceblue";
  document.getElementsByClassName("fa-rupee-sign")[1].style.color = "aliceblue";
}

function dark_theme() {
  document.body.style.color = "aliceblue";
  document.body.style.backgroundColor = "rgb(25, 0, 56)";
  var invoices = document.getElementsByClassName("invoice");
  for (let i = 0; i < invoices.length; i++) {
    invoices[i].style.backgroundColor = "rgba(48, 1, 110, 0.678)";
    invoices[i].style.color = "aliceblue";
  }
  var box1 = document.getElementsByClassName("details_div");
  for (let i = 0; i < box1.length; i++) {
    box1[i].style.backgroundColor = "rgba(48, 1, 110)";
    box1[i].style.color = "aliceblue";
  }

  var box2 = document.querySelectorAll(".invoice_detail_box");
  for (let i = 0; i < box2.length; i++) {
    box2[i].style.backgroundColor = "rgba(48, 1, 110)";
    box2[i].style.color = "aliceblue";
  }
}

function change_theme(e) {
  console.log(e.parentElement);
  var theme_id = e.id;
  if (theme_id == "theme_icon") {
    let theme_icon = document.getElementById("theme_icon").classList;
    let curr_theme = e.className.split(" ")[1];

    if (curr_theme == "fa-sun") {
      console.log(1);
      theme_icon.remove("fa-sun");
      theme_icon.add("fa-moon");
      light_theme();
    } else {
      theme_icon.remove("fa-moon");
      theme_icon.add("fa-sun");
      dark_theme();
    }
  } else {
    let theme_icon = document.getElementById("theme_icon2").classList;
    let curr_theme = e.className.split(" ")[1];

    if (curr_theme == "fa-sun") {
      console.log(1);
      theme_icon.remove("fa-sun");
      theme_icon.add("fa-moon");
      light_theme();
    } else {
      theme_icon.remove("fa-moon");
      theme_icon.add("fa-sun");
      dark_theme();
    }
  }
}

function invoice_type(type) {
  var invoices = document.querySelectorAll(".invoice");
  console.log(invoices);
  console.log(type);

  for (let i = 0; i < invoices.length; i++) {
    var inv = invoices[i].querySelector("#payment_status").className;
    // invoices[i].style.display = "block";
    if (screen.width < 601) {
      invoices[i].style.display = "grid";
    } else {
      invoices[i].style.display = "flex";
    }
  }

  console.log(screen.width);

  if (type == "All") {
    for (let i = 0; i < invoices.length; i++) {
      // invoices[i].style.display = "block";
      if (screen.width < 601) {
        invoices[i].style.display = "grid";
      } else {
        invoices[i].style.display = "flex";
      }
    }
  } else {
    for (let i = 0; i < invoices.length; i++) {
      var inv = invoices[i].querySelector("#payment_status").className;
      console.log(inv);
      if (inv != type) {
        invoices[i].style.display = "none";
      }
    }
  }
  // document.getElementById("total_invoices").innerHTML = all_data.length;
}

function new_invoice() {
  document.querySelector(".new_invoice_form").style.width = "100%";
}

function generate_UID(name, address, date) {
  let uid = "#";
  let n = name.split(" ");
  let a = address.split("");
  let d = date.split("-");
  console.log(d);
  for (let i = 0; i < n.length; i++) {
    let x = n[i].split("")[0];
    uid += x;
  }
  uid += d[2];
  console.log(uid);
  return uid;
}

function generate_Date(d1) {
  let date_string = " ";
  var months_arr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let x = d1.split("-");
  console.log(x);
  let date = x[2];
  date_string += date;
  let month = months_arr[parseInt(x[1].split("")[1]) - 1];
  date_string += " " + month;
  let year = x[0];
  date_string += "," + year;
  console.log(date_string);
  return date_string;
}

function add_item() {
  if (counter == 0) {
    var cust_name = document.getElementById("cust_name").value;
    var cust_email = document.getElementById("cust_email").value;
    var cust_address = document.getElementById("text_area").value;
    var invoice_date = document.getElementById("invoice_date").value;
    invoice_date_format = generate_Date(invoice_date);
    var payment_due = document.getElementById("payment_due").value;
    payment_due_format = generate_Date(payment_due);
    var status = document.querySelector('input[name="status"]:checked').value;
    let uid = generate_UID(cust_name, cust_address, invoice_date);
    console.log("customer created");
    obj.uid = uid;
    obj.name = cust_name;
    obj.email = cust_email;
    obj.address = cust_address;
    obj.invoice_date = invoice_date_format;
    obj.payment_due = payment_due_format;
    obj.id = id_count;
    obj.status = status;
    counter = counter + 1;
  }
  console.log(obj);
  document.getElementById("div10").style.display = "block";
  var item = document.getElementById("item");
  var item_cost = document.getElementById("item_cost");
  var item_quantity = document.getElementById("item_quantity");
  var td1 = document.createElement("TD");
  td1.innerHTML = item.value;
  console.log(td1);
  var td2 = document.createElement("TD");
  td2.innerHTML = item_cost.value;
  var td3 = document.createElement("TD");
  td3.innerHTML = item_quantity.value;
  var tr = document.createElement("TR");
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  document.getElementById("tbody").appendChild(tr);
  let x = [];
  x.push(item.value);
  x.push(item_cost.value);
  x.push(item_quantity.value);
  items.push(x);
  total_sum += item_cost.value * item_quantity.value;
  document.getElementById("total_sum").innerHTML = "₹ " + total_sum;
  obj.total_sum = total_sum;

  item.value = " ";
  item_cost.value = " ";
  item_quantity.value = " ";
  obj.items = items;
  console.log(obj);
  data.push(obj);
  storage.push(obj);
}

function delete_invoice(e) {
  let val = e.value;
  for (let i = 0; i < local_storage.length; i++) {
    let obj = local_storage[i];
    if (obj.uid == val) {
      local_storage.splice(i, 1);
      console.log(local_storage);
      localStorage.clear();
      localStorage.setItem("local_data", JSON.stringify(local_storage));
      create_cards(local_storage);
      document.querySelector(".details_div_container").style.height = "0%";

      // window.reload();
    }
  }
}

function change_status(e) {
  var status = e.innerHTML;
  var val = e.value;
  var s;
  console.log(status);
  if (status == "Mark As Paid") {
    e.innerHTML = "Mark As Pending";
    s = "Paid";
  } else {
    e.innerHTML = "Mark As Paid";
    s = "Pending";
  }

  for (let i = 0; i < local_storage.length; i++) {
    let obj = local_storage[i];
    if (obj.uid == val) {
      obj.status = s;
      document.getElementById("set_status").innerHTML = obj.status;
      localStorage.clear();
      localStorage.setItem("local_data", JSON.stringify(local_storage));
      create_cards(local_storage);
    }
  }
}

function getDetails(div) {
  console.log("s");
  document.querySelector(".details_div_container").style.height = "100%";
  console.log(div.parentElement.parentElement.parentElement);
  var main_div = div.parentElement.parentElement.parentElement;
  var get_uid = main_div.querySelector("#unique_id").innerHTML;
  console.log(get_uid);
  console.log(local_storage);
  for (let i = 0; i < local_storage.length; i++) {
    let obj = local_storage[i];
    if (obj.uid == get_uid) {
      document.getElementById("set_UID").innerHTML = obj.uid;
      document.getElementById("set_address").innerHTML = obj.address;
      document.getElementById("set_payment_date").innerHTML = obj.payment_due;
      document.getElementById("set_invoice_date").innerHTML = obj.invoice_date;
      document.getElementById("set_name").innerHTML = obj.name;
      document.getElementById("set_email").innerHTML = obj.email;
      document.getElementById("set_status").innerHTML = obj.status;
      document.getElementById("del_invoice").setAttribute("value", obj.uid);
      if (obj.status == "Paid") {
        document.getElementById("set_changeable_status").innerHTML =
          "Mark As Pending";
        // document.getElementById("set_changeable_status").setAttribute("data-changeable_status","Pending");
        document
          .getElementById("set_changeable_status")
          .setAttribute("value", obj.uid);
      } else {
        document.getElementById("set_changeable_status").innerHTML =
          "Mark As Paid";
        document
          .getElementById("set_changeable_status")
          .setAttribute("value", obj.uid);
        // document.getElementById("del_invoice").setAttribute("value", obj.uid);
        // document.getElementById("set_changeable_status").setAttribute("data-changeable_status","P");
      }

      for (let j = 0; j < obj.items.length; j++) {
        console.log(obj.items[i]);
        let arr = [];
        arr = obj.items[i];

        let tr = document.createElement("TR");
        let td1 = document.createElement("TD");
        let td2 = document.createElement("TD");
        let td3 = document.createElement("TD");
        let td4 = document.createElement("TD");
        td1.innerHTML = arr[0];
        td2.innerHTML = arr[1];
        td3.innerHTML = arr[2];
        td4.innerHTML = arr[1] * arr[2];

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        document.getElementById("detail_table_tbody").appendChild(tr);
      }

      document.getElementById("set_total_sum").innerHTML = "₹ " + obj.total_sum;
    }
  }
}

function create_cards(all_data) {
  console.log(all_data);
  var cards = " ";
  for (let i = 0; i < all_data.length; i++) {
    let ps = all_data[i].status;
    console.log("inside loop");

    cards += `
            <div class="invoice">
            <div>
                <p id="unique_id">${all_data[i].uid}</p>
            </div>
            <div>
                <p id="due_date">${all_data[i].payment_due}</p>
            </div>
            <div>
                <p id="name">${all_data[i].name}</p>
            </div>
            <div>
                <p id="amount">₹ ${all_data[i].total_sum}</p>
            </div>
            <div id="payment_status" class=${ps} > <i class="fas fa-circle"></i>${ps}</div>
            <div><p><button class="btn btn-info" onclick="getDetails(this)">View</button></p></div>
        </div>`;
  }
  document.getElementsByClassName("invoices_container")[0].innerHTML = cards;
  // document.getElementById("total_invoices").innerHTML = all_data.length;
}

function reset(){
  localStorage.clear();
  localStorage.setItem("username","NULL");
  window.location.reload();
  user_counter=0;
}

function submit_details() {
  console.log(storage);
  local_storage.push(storage[storage.length - 1]);
  localStorage.setItem("local_data", JSON.stringify(local_storage));
  create_cards(local_storage);
  obj = {};
  total_sum = 0;
  counter = 0;
  items = [];
  id_count += 1;
  document.getElementById("cust_name").value = " ";
  document.getElementById("cust_email").value = " ";
  document.getElementById("text_area").value = " ";
  document.getElementById("invoice_date").value = " ";
  document.getElementById("payment_due").value = " ";

  var tab = document.querySelectorAll("tbody tr");
  for (let i = 0; i < tab.length; i++) {
    document.getElementById("table").deleteRow(1);
  }
  document.getElementById("total_sum").innerHTML = " ";
  document.getElementById("div10").style.display = "none";
}
