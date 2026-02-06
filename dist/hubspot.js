fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
  headers: {
    Authorization: "Bearer TU_TOKEN"
  }
})
.then(res => res.json())
.then(data => {
  console.log(data);
});
