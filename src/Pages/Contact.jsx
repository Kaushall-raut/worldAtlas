export const Contact = () => {
  const handleSubmit = (formData) => {
    // e.preventDefault();
    console.log(formData);

    console.log(formData.entries());

    const contactData = Object.fromEntries(formData.entries());

    console.log(contactData);

    // Object.FromEntries convert the data in to pure js object which can be passed to the backend

    // entries() return an iterator of key value pairs from the formData object
  };
  return (
    <section className="container contact-section flex">
      <h1>Contact Us</h1>
      <div className="form-container">
        <form action={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            // autoComplete="off"
          />
          <textarea
            name="msg"
            rows={4}
            cols={12}
            placeholder="Enter your msg"
            autoCorrect="on"
          ></textarea>
          <button type="submit" className="flex">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
