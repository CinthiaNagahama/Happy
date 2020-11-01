import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api'

import '../styles/pages/orphanage-map.css';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
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
                center={[-15.7215104,-47.917939]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

            {orphanages.map(orphanage => {
                return (
                    <Marker
                        key={orphanage.id}    
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                    >
                        <Popup className="map-popup" closeButton={false} minWidth={240} maxWidth={240}>
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#fff"/>
                            </Link>
                        </Popup>
                    </Marker>
                );
            })}

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;