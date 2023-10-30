(() => {

  const tempCelsius = [33.6, 12.34];

  const serverIP = '123.123.123.123';

  const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

  const userEmails = users.map( user => user.email );

  const canJump = false;
  const canRun = true;
  const hasItems = false;
  const isLoading = false;

  const startTime = new Date().getTime();
  const endTime = new Date().getTime() - startTime;


  function getBooks() {
      throw new Error('Function not implemented.');
  }

  function getBooksUrl( url: string) {
      console.log('💻 ~ getBooksUrl ~ url:', url);
      throw new Error('Function not implemented.');
  }
  
  function getSquareArea( side: number ) {
      console.log('💻 ~ getSquareArea ~ side:', side);
      throw new Error('Function not implemented.');
  }

  function printJob() {
      throw new Error('Function not implemented.');
  }

})();




