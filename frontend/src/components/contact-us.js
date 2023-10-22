import '../css/contact-us.css'; 

const ContactUs = function(){

     return(

		<div class="wrapper">
			<div class="inner">
				<form action="">
					<h1>Contact Us</h1>
					<label class="form-group">
						<input type="text" class="form-control"  required/>
						<h3>Your Name</h3>
					</label>
					<label class="form-group">
						<input type="text" class="form-control"  required/>
						<h3>Your Mail</h3>
					</label>
					<label class="form-group" >
						<textarea name="" id="" class="form-control" required></textarea>
						<h3>Your Message</h3>
					</label>
					<button>Submit 
						<i class="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
		
       )
}

export default ContactUs;