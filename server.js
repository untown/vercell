const SERVER_PORT = process.env.PORT || 8080;
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
