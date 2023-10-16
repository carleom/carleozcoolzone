function compareUpdates( a, b ) {
    if ( a.updated.replace("-","") < b.updated.replace("-","") ){
      return 1;
    }
    if ( a.updated.replace("-","") > b.updated.replace("-","") ){
      return -1;
    }
    return 0;
}

function compareCreated( a, b ) {
    if ( a.created.replace("-","") < b.created.replace("-","") ){
      return 1;
    }
    if ( a.created.replace("-","") > b.created.replace("-","") ){
      return -1;
    }
    return 0;
  }

export const sortCreatedPosts = (posts) => {
    let sorted = posts.sort(compareCreated)
    return sorted
}


export const sortUpdatedPosts = (posts) => {
    let sorted = posts.sort(compareUpdates)
    return sorted
}