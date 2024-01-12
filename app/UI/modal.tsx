'use client'
import { handleChange } from '@/helpers/handleChange';
import { setGender, setSpecies, setStatus } from '@/provider/redux/filters';
import { RootState } from '@/provider/redux/store';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import '/scss/modals.scss'

function Modals() {

  const dispatch = useDispatch();
  const { status, species, gender, name } = useSelector((state: RootState) => state.filters);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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