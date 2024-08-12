import React from 'react';
import parse from 'html-react-parser';

function About() {

        return (

            <div className="right">

                <div className="contents">
                <h2>About Our Company</h2>
                <table>
                    <tr>
                        <td className="key">COMPANY</td><td className="value">KEIX Co., Ltd.</td>
                    </tr>
                    <tr>
                        <td>President</td><td>KEI SAWAMURA</td>
                    </tr>
                    <tr>
                        <td>ZipCode</td><td>530-0001</td>
                    </tr>
                    <tr>
                        <td>ADDRESS</td><td>12-12 Ekimae-2nd-building, 1-2-2 Umeda, Kita-Ward Osaka, Osaka Japan.</td>
                    </tr>
                    <tr>
                        <td>Established</td><td>2024/05/09</td>
                    </tr>
                    <tr>
                        <td>Our Services</td><td>We mainly offer Cloud, Blockchain, and AI technology on POSIX.</td>
                    </tr>
                    <tr>
                        <td>Bussiness Hour</td><td>We are open 24/7</td>
                    </tr>
                    <tr>
                        <td>CAPITAL</td><td>1,000,000 JPY</td>
                    </tr>
                    <tr>
                        <td>MAIN-BANK</td><td>PayPay Bank Corporation. | GMO Aozora Net Bank, Ltd.</td>
                    </tr>
                </table>
                </div>

            </div>

        );
    }

export default About;
