import React from 'react';

const Troubleshooting = () => (
    <div className='backgrounds'>
        <h1>Troubleshooting</h1>
        <ul>
            <h2>Keyboard Not Responding :</h2>
            <li>Ensure the USB connection is secure.</li>
            <li>Try connecting the keyboard to a different USB port.</li>
            <li>Restart your computer if necessary.</li>
        </ul>
        <ul>
            <h2>Backlighting Not Working:</h2>
            <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
            <li>Verify that the configuration software is properly installed.</li>
        </ul>
        <ul>
            <h2>Key Not Registering:</h2>
            <li>Confirm that no physical obstructions are affecting the key.</li>
            <li>Test the key in different applications to determine if the issue is software-related.</li>
        </ul>
    </div>
);

export default Troubleshooting;