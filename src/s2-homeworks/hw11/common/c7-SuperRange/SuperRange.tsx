import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: "#00CC22", // Зеленый цвет после ползунка
                width: '147px',
                height: '4px',
                '.MuiSlider-rail': {
                    backgroundColor: '#8B8B8B', // Серый цвет основной шкалы
                },
                '.MuiSlider-thumb': {
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#fff',
                    border: '2px solid #00CC22', // Зеленый цвет рамки ползунка
                    borderRadius: '50%', // Круглая форма ползунка
                },
                '.MuiSlider-valueLabel': {
                    backgroundColor: 'transparent', // Прозрачный фон для значения ползунка
                },
                '.MuiSlider-valueLabel span': {
                    display: 'none', // Скрытие значения ползунка
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
