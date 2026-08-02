<x-app-layout meta-title="" meta-description="">
    <style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 200px; /* Set a fixed height for each row */
    grid-gap: 10px;
  }

  .gallery-image {
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    object-position: center; /* Center the image within its container */
    transition: transform 0.3s ease;
  }

  .gallery-image:hover {
    transform: scale(1.1); /* Enlarge the image on hover */
  }
 

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* Adjust as needed */
}

.pagination-link {
    color: green;
    text-decoration: none;
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid green;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-family: Archivo Black, Arial Black, sans-serif;
}

.pagination-link:hover {
    background-color: green;
    color: yellow;
}

.pagination-link.active {
    background-color: green;
    color: yellow;
}

</style>

<!-- Gallery Grid -->
<div class="gallery">
  @foreach ($gallery as $item)
    <img src="storage/{{ $item->image }}" alt="{{$item->title}}" class="gallery-image" loading="lazy">
  @endforeach
</div>


<!-- Pagination Links -->
<div class="pagination">
  <!-- Previous Page Button -->
  <a href="{{ $gallery->previousPageUrl() }}" class="pagination-link">Previous</a>

  <!-- Page Numbers -->
  @for ($i = 1; $i <= $gallery->lastPage(); $i++)
    <a href="{{ $gallery->url($i) }}" class="pagination-link {{ $gallery->currentPage() == $i ? 'active' : '' }}">{{ $i }}</a>
  @endfor

  <!-- Next Page Button -->
  <a href="{{ $gallery->nextPageUrl() }}" class="pagination-link">Next</a>
</div>

<!-- Modal -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="modalTitle"></h2>
    <img src="" alt="" id="modalImage">
  </div>
</div>

<!-- JavaScript -->
<script>
  // Get the modal element
  var modal = document.getElementById("myModal");

  // Get the images in the gallery
  var galleryImages = document.querySelectorAll(".gallery-image");

  // Loop through each gallery image
  galleryImages.forEach(function(image) {
    // Add click event listener to each image
    image.addEventListener("click", function() {
      // Get the image source and title
      var imageSrc = this.src;
      var imageAlt = this.alt;

      // Set the modal title and image source
      document.getElementById("modalTitle").innerText = imageAlt;
      document.getElementById("modalImage").src = imageSrc;

      // Display the modal
      modal.style.display = "block";
    });
  });

  // Close the modal when the close button is clicked
  document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
</script>

</x-app-layout>
