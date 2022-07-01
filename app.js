let orders;
// const clickHandler = (e) => {
//   console.log(e);
// };

axios.get("https://62bdefc7bac21839b60dc76c.mockapi.io/orders").then((res) => {
  res.data.map((order) => {
    return (document.body.innerHTML += `<div id=${order.id} class='order__div'> <div> <p>name : ${order.name}</p> <p>address : ${order.address}</p> <p>phone : ${order.phone}</p> <p> ordered at : ${order.createdAt}</p> <p></p> product : ${order.product} </div> <i    class="fa fa-trash" aria-hidden="true"></i>
    </div> `);
  });
});

setTimeout(() => {
  document.querySelectorAll(".fa").forEach((item) =>
    item.addEventListener(
      "click",
      (e) => {
        axios.delete(
          `https://62bdefc7bac21839b60dc76c.mockapi.io/orders/${e.target.parentNode.id}`
        );
        setTimeout(() => {
          window.location.reload();
        }, 600);
      },
      { once: true }
    )
  );
}, 1000);
