import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api'

import '../styles/pages/orphanage-map.css';

function OrphanagesMap(){
    useEffect(() => {
        api.get('orphanages').then(response => {
            console.log(response)
        })
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="mapa"></img>

                    <h2>Escolha um orfanato</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Brasília</strong>
                    <span>Distrito Federal</span>
                </footer>
            </aside>
            
            <Map 
                center={[-15.671794,-47.8532202]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                    icon={mapIcon}
					position={[-15.671794,-47.8532202]}
				>
					<Popup className="map-popup" closeButton={false} minWidth={240} maxWidth={240}>
						Lar das Meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
					</Popup>
				</Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;