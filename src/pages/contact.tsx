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
      <div className="m-2">
        <div>
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
              alt="Cub Scouts Pack 247 - Miami Lakes / PSN"
              src="../images/contactus1.jpg"
            />
          </div>
        </div>
        <div>
          <h1> Contact Us</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            maxime, corrupti illum explicabo cum mollitia accusamus in. Esse est
            dignissimos facilis alias amet ipsum dicta nam? Quasi quibusdam
            laudantium id.
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
