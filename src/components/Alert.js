import React from 'react'

const Alert = () => {
  return (
    <>
<div class="z-1 alert alert-success alert-dismissible fade show" role="alert">
  <strong> Till Next Update!</strong> You Need To Refresh Before Manually Selecting Emotions.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </>
  )
}

export default Alert