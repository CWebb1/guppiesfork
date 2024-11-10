<script>
  export let item;
</script>

<section>
  <img src={item.image_url} alt={item.product_name}  height="100%" />
</section>

<style>
  section {
    display: flex;

    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  img {
    padding-left: 3em;
    max-width: 75%;
    max-height:75%;
    object-fit: cover;  /* Ensures the image covers the container while maintaining aspect ratio */
    margin: 0;
  }

  @media(max-width:900px)
  {
    img {
      display: none;
    }
  }
  /* section img {
   
    justify-content: right;
  } */
</style>
