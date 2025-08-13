export default (err,req,res,next)=>{
  if(err.name==="ValidationError"){
    let errMessages=Object.values(err.errors).map(doc=>doc.message)
    let message=errMessages.join(", ");
    err.message=message
    err.status=400
  }
  
  let status=err.status || 500
  let message=err.message || 'Something went wrong'
  res.status(status).json({ message });
}