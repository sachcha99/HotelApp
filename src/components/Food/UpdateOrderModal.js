import React, {useEffect, useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {useForm} from "react-hook-form";
import API from "../api";
import axios from "axios";

const EditResearchModal = (props) => {
    const [open, setOpen] = useState(false);
    const [title,setTitle] = useState("");
    useEffect(() => {
        setTitle(props.row.title)
    }, []);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const {register, handleSubmit} = useForm();
    const token =JSON.parse(sessionStorage.getItem("token"));

    const submitResearch = () => {

    };

    return (
        <div>
            <Button onClick={onOpenModal}>Edit</Button>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="workshop-modal">
                    <h3>RESEARCH PAPER SUBMISSION</h3>
                    <p>Proposal submissions should be submitted as a single PDF file online at the following link:</p>
                    <Form className="workshop-from-modal" onSubmit={handleSubmit(submitResearch)}>

                        <Button color="secondary" size="lg">Resubmit</Button>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};

export default EditResearchModal;