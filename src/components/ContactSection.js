import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ContactSection() {
	return (
		<div id="contact_section">
			<div className="container section">
				<h1>Contact</h1>
				<div className="row mt-4">
					<div className="col-4">
						<h2 className="mt-3 mb-5">Get in touch</h2>
						<div className="d-flex align-items-center mb-4">
							<div className="contact_icon rounded-circle">
								<FaGithub size={20} />
							</div>

							<p className="ms-2 contact_icon_title">
								<strong>Github</strong>
							</p>
						</div>
						<div className="d-flex align-items-center mb-4">
							<div className="contact_icon rounded-circle">
								<FaLinkedinIn size={20} />
							</div>

							<p className="ms-2 contact_icon_title">
								<strong>LinkedIn</strong>
							</p>
						</div>
						<div className="d-flex align-items-center mb-4">
							<div className="contact_icon rounded-circle">
								<FaFacebookF size={20} />
							</div>

							<p className="ms-2 contact_icon_title">
								<strong>Facebook</strong>
							</p>
						</div>
						<div className="d-flex align-items-center ">
							<div className="contact_icon rounded-circle">
								<FaInstagram size={20} />
							</div>

							<p className="ms-2 contact_icon_title">
								<strong>Instagram</strong>
							</p>
						</div>
					</div>
					<div className="col-6">
						<h2 className="mt-3 mb-5">Send me a message</h2>
						<form>
							<div className="mb-3">
								<div className="row">
									<div className="col">
										<div className="mb-3">
											<input
												type="text"
												className="form-control"
												placeholder="Your Name"
											/>
										</div>
									</div>
									<div className="col">
										<div className="mb-3">
											<input
												type="email"
												className="form-control"
												placeholder="Your Email"
											/>
										</div>
									</div>
								</div>
								<div className="mb-3">
									<input
										type="text"
										className="form-control"
										id="subject"
										placeholder="Subject"
									/>
								</div>
								<div className="mb-3">
									<textarea
										className="form-control"
										id="message"
										rows="3"
										placeholder="Message"
									></textarea>
								</div>
							</div>

							<button type="submit" className="btn btn-sm btn_custom">
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
