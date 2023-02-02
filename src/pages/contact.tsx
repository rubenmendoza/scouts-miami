import React from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Seo from "../components/seo";
import Layout from "../components/layout";
import ContactForm from "../components/form/contact";

const Contact = () => {
  return (
    <Layout>
      <div className="col-3_2">
        <div className="row-2">
          <div>
            <MapContainer
              style={{ height: "400px" }}
              center={[25.915, -80.3087]}
              zoom={15}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[25.9188, -80.3087]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div>
            <StaticImage
              alt="Cub Scouts Troop 247 - Miami Lakes / PSN"
              src="../images/contactus1.jpg"
            />
          </div>
        </div>
        <div className="row-2">
          <div>
            <h1> Contact Us</h1>
            <h3> We are prepared to help you.</h3>
            <p>
              Our scouts want to hear from you. Do not hesitate to drop a couple
              of lines with any comments, questions, invitations, etc.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
export const Head: HeadFC = () => <Seo title="Contact Us" />;
