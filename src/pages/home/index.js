import React from 'react';
import {useContext,useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';


import api from '../../services/api';
import {Main, Form, FormHeader, FieldArea, Button,Error} from './style';
import {ResultContex} from '../../Context/ResultContext';
import Modal from '../../components/Modal'

function Home(){
    const {setResult} = useContext(ResultContex);
    const [openModal,setOpenModal] = useState(false);

   async function calculate(values){
        await api.post('/',{
            "expr": `${values.payment} * (((1 + 0.00517) ^ ${values.time} - 1) / 0.00517)`,
            "precision": 5
            }).then(response => {
                setResult({
                    name: values.name,
                    payment: values.payment,
                    time: values.time,
                    finalResult: response.data.result
                });
                setOpenModal(true);
            }).catch(err => {
                console.log("erro ao cadastrar" + err);  
            });
    }

    const validateSchema = yup.object().shape({
        name: yup.string().min(3,'Por favor, informe um nome válido.').required('Por favor, informe seu nome.'),
        payment: yup.number().required('Por favor, informe o valor da mensalidade.'),
        time: yup.number().required('Por favor, informe o tempo que deseja investir.'),
    })

    return(
        <Main>
            <Formik
                initialValues={
                  {
                    name: '',
                    payment: '',
                    time: '',
                  }
                }
                validationSchema={validateSchema}
                onSubmit={values => calculate(values)}
            >
                {({handleChange,handleBlur,handleSubmit,errors,touched, values}) => (
                    <Form onSubmit={handleSubmit}> 
                        <FormHeader>
                            <h2>Ciclic</h2>
                            <p>Simule seus investimentos a juros compostos</p>
                        </FormHeader>
        
                        <FieldArea>
                            <label>Qual seu nome ?</label>
                            <input 
                                type="text" 
                                placeholder="Nome" 
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                autoComplete="off"
                            />
                            {errors.name && touched.name ? (
                                <Error>{errors.name}</Error>
                            ):null}
                        </FieldArea>
        
                        <FieldArea>
                            <label>Quanto quer poupar ?</label>
                            <input 
                                type="text" 
                                name="payment"
                                placeholder="Mensalidade"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.payment}
                                autoComplete="off"
                            />
                              {errors.payment && touched.payment ? (
                                <Error>{errors.payment}</Error>
                            ):null}
                        </FieldArea>
        
                        <FieldArea>
                            <label>Por quanto tempo ?</label>
                            <select
                                name="time"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.time}
                            >
                                <option value="">Selecione</option>
                                <option value="12">1 Ano</option>
                                <option value="24">2 Anos</option>
                                <option value="36">3 Anos</option>
                                <option value="48">4 Anos</option>
                            </select>

                            {errors.time && touched.time ? (
                                <Error>{errors.time}</Error>
                            ):null}
                        </FieldArea>
                        
                        <Button type="submit">Simular</Button>
                    </Form>
                )}
            </Formik>
            <Modal openModal={openModal} closeModal={() => setOpenModal(!openModal)}/>
        </Main>
    );
}

export default Home;
