'use client'
import { handleChange } from '@/helpers/handleChange';
import { NavigatePanelClass } from '@/helpers/isOnLocationsPage';
import { setDimension, setGender, setSpecies, setStatus, setType } from '@/provider/redux/filters';
import { RootState } from '@/provider/redux/store';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import '/scss/modals.scss'

function Modals() {

  const dispatch = useDispatch();
  const { status, species, gender } = useSelector((state: RootState) => state.filters);
  const { type, dimension } = useSelector((state: RootState) => state.filters);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = usePathname();
  const panelClass = NavigatePanelClass(router);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADVANCED FILTERS
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {panelClass === 'Characters' && (
            <div>
              <select defaultValue={species} onChange={(event) => dispatch(setSpecies(handleChange(event)))}>
                <option value="">Species</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Poopybutthole">Poopybutthole</option>
              </select>
              <select defaultValue={gender} onChange={(event) => dispatch(setGender(handleChange(event)))}>
                <option value="">Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="genderless">genderless</option>
                <option value="unknown">unknown</option>
              </select>
              <select defaultValue={status} onChange={(event) => dispatch(setStatus(handleChange(event)))}>
                <option value="">Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
              </select>
            </div>
          )}
          {panelClass === 'Locations' && (
            <div>
              <select defaultValue={type} onChange={(event) => dispatch(setType(handleChange(event)))} >
                <option value="">Type</option>
                <option value="Planet">Planet</option>
                <option value="Cluster">Cluster</option>
                <option value="Space station">Space station</option>
                <option value="TV">TV</option>
                <option value="Microverse">Microverse</option>
                <option value="Resort">Resort</option>
                <option value="Fantasy town">Fantasy town</option>
                <option value="Dream">Dream</option>
              </select>
              <select defaultValue={dimension} onChange={(event) => dispatch(setDimension(handleChange(event)))} >
                <option value="">Dimension</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="genderless">genderless</option>
                <option value="unknown">unknown</option>
              </select>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            APPLY
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;