function filterEvents() {
  const searchBar = document.getElementById( 'search-bar' );
  const filter = searchBar.value.toLowerCase();
  const eventList = document.getElementById( 'event-list' );
  const events = eventList.getElementsByClassName( 'event' );

  Array.from( events ).forEach( event => {
    const eventName = event.getElementsByTagName( 'h3' )[ 0 ].innerText;
    const eventLocation = event.getElementsByTagName( 'h5' )[ 0 ].innerText;

    if ( eventName.toLowerCase().includes( filter ) || eventLocation.toLowerCase().includes( filter ) ) {
      event.style.display = "";
    } else {
      event.style.display = "none";
    }
  } );
}
