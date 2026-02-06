fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
  headers: {
    Authorization: "Bearer eu1-737e-edb3-4b6d-8532-23b36ea925f7"
  }
})
.then(res => res.json())
.then(data => {
  console.log(data);
});
