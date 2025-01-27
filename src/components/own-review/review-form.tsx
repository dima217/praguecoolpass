// @ts-nocheck
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai'; // Иконка меню
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../redux/Slices/modalSlice'; // Импорт action
import {CustomInput} from './input';
import {CustomRating} from './raiting';

const ReviewForm = ({
    active, setActive, onSuccess, onReset, popupTranslations
}) => {
    const required = popupTranslations.FORM_validate_required || 'is required';
    const schema = yup.object().shape({
        name: yup.string().required(`Name ${required}`),
        email: yup.string().email('Invalid email address').required(`Email ${required}`),
        title: yup.string().required(`Title ${required}`),
        country: yup.string().required(`Country ${required}`),
        rating: yup.number().min(1, 'Select a rating').required(`Rating ${required}`),
        message: yup.string().required(`Message ${required}`)
    });
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setValue,
        reset,
        watch 
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const ratingValue = watch('rating'); // Получаем текущее значение рейтинга

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        onSuccess();
    };

    React.useEffect(() => {
        if (onReset) {
            onReset(() => {
                reset(); 
                setValue('rating', 0); 
            });
        }
    }, [reset, setValue, onReset]);

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity z-[202] ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setActive(false)}
        >
            <div
                className="bg-white md:rounded-xl md:px-[50px] px-2 md:pb-[25px] max-w-[855px] w-full md:h-fit h-full relative scrollable-content"
                onClick={(e) => e.stopPropagation()}
            >

                <div className='absolute right-4 md:top-5 top-10'>
                    <button
                        className="text-black"
                        onClick={() => setActive(false)}
                    >
                        <AiOutlineClose size={24} />
                    </button>
                </div>
                <div className='my-[23px] mt-10'>
                    <h2 className="text-[22px] font-bold pb-[15px]">{ (popupTranslations.WRITE_REVIEW).toUpperCase()}</h2>
                    <p className='text-sm'>
                        {popupTranslations.REVIEWS_review_form_text}
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-[5px]'>
                    <div className='grid md:grid-cols-2 grid-rows-4 md:grid-rows-2'>
                        <CustomInput
                            error={errors.name}
                            register={register}
                            labeltext={popupTranslations.REVIEWS_form_name_field}
                            placeholdertext={popupTranslations.REVIEWS_form_name_placeholder}
                            id={'name'}
                        />
                        <CustomInput
                            error={errors.email}
                            register={register}
                            labeltext={popupTranslations.REVIEWS_review_form_email_field}
                            placeholdertext={popupTranslations.APP_EMAIL}
                            id='email'
                            type='email'
                        />
                        <CustomInput
                            error={errors.title}
                            register={register}
                            labeltext={popupTranslations.REVIEWS_review_form_title_field}
                            placeholdertext={popupTranslations.REVIEWS_review_form_title_placeholder}
                            id='title'
                        />
                        <CustomInput
                            error={errors.country}
                            register={register}
                            labeltext={popupTranslations.REVIEWS_review_form_city_field}
                            placeholdertext={popupTranslations.REVIEWS_review_form_city_placeholder}
                            id='country'
                        />
                    </div>

                    <CustomRating
                        title={popupTranslations.REVIEWS_review_form_rating_field}
                        error={errors.rating}
                        register={register}
                        setValue={setValue}
                        value={ratingValue} 
                    />

                    <div>
                        <textarea
                            id="message"
                            rows={5}
                            cols={30}
                            placeholder={popupTranslations.REVIEWS_review_form_text_placeholder || 'Type your message here'}
                            {...register('message')}
                            className={`block w-full border-[0.8px] ${errors.message ? 'border-red-500' : 'border-[#dbdbdb]'} shadow-sm sm:text-sm mt-[10px] p-[15px] focus:outline-none focus:border-[#585858] text-sm resize-none`}
                        />
                    </div>

                    <div className='text-right mt-6'>
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`h-[48px] md:w-[245px] w-full py-2 md:px-4 px-2 rounded-md text-white font-bold ${isValid ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'}`}
                        >
                            {popupTranslations.REVIEWS_send_btn || 'SEND'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const PopupUse = ({ popupTranslations }) => {
    const [isFormActive, setFormActive] = useState(false);
    const [isThankYouVisible, setThankYouVisible] = useState(false);
    const [resetForm, setResetForm] = useState(() => () => { });
    const scrollPositionRef = useRef(0); // Сохранение позиции скролла

    const handleReset = React.useCallback((resetFunction) => {
        setResetForm(() => resetFunction);
    }, []);

    const applyBodyStyles = (isActive) => {
        const { body } = document;
        const html = document.documentElement;

        if (isActive) {
            scrollPositionRef.current = window.scrollY;

            body.style.position = 'fixed';
            body.style.top = `-${scrollPositionRef.current}px`;
            body.style.width = '100%'; 
            html.style.overflow = 'hidden';
        } else {
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            html.style.overflow = '';

            window.scrollTo({
                top: scrollPositionRef.current,
                behavior: 'instant' 
            });
        }
    };

    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(setIsModalOpen(true)); 
        setFormActive(true);
        applyBodyStyles(true);
    };

    const closeModal = () => {
        dispatch(setIsModalOpen(false)); 
        setFormActive(false);
        applyBodyStyles(false);

        if (isThankYouVisible) {
            resetForm();
        }
        setThankYouVisible(false);
    };

    const handleSuccess = () => {
        setThankYouVisible(true); 
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="h-[40px] md:w-fit w-full rounded-[5px] bg-white border border-black flex items-center justify-center text-black text-center hover:border-opacity-10 md:mb-0 mb-3 "
            >
                <div className='text-[15px] font-bold px-5'>{popupTranslations.REVIEWS_write_your_opinion.toUpperCase() || 'WRITE YOUR REVIEW'}</div>
            </button>

            <ReviewForm
                active={isFormActive}
                setActive={closeModal}
                onSuccess={handleSuccess}
                onReset={handleReset}
                popupTranslations={popupTranslations}
            />

            {isThankYouVisible && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[203] transition-opacity ${isThankYouVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => closeModal()}
                >
                    <div
                        className="bg-white p-8 rounded-[20px] shadow-lg text-center flex justify-center items-center absolute w-[250px] h-[150px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='absolute right-[10px] top-[10px]'>
                            <button
                                className="text-black"
                                onClick={() => closeModal()}
                            >
                                <AiOutlineClose size={15} />
                            </button>
                        </div>
                        <h5 className="text-sm font-bold h-[36px] w-[194px]">{popupTranslations.REVIEWS_modal_text || 'THANK YOU FOR YOUR FEEDBACK!'}</h5>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupUse;
