import React, { useState } from "react";
import { ShopingList } from "./ShopingList.jsx"; 
// וודאי שהנתיב ל-ShopingList נכון לפי התיקיות שלך

const ShoppingPage = () => {
    // ניהול מצב: האם אנחנו בתצוגה או בעריכה
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <div className="shopping-page-container" style={{ direction: 'rtl', padding: '20px' }}>
            
            {/* סרגל כלים עליון של דף הקניות */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '20px',
                padding: '10px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px'
            }}>
                <h2 style={{ margin: 0 }}>ניהול רשימת קניות</h2>
                
                {/* כפתור המעבר בין המצבים */}
                <button 
                    onClick={() => setIsEditMode(!isEditMode)}
                    style={{
                        padding: '8px 16px',
                        cursor: 'pointer',
                        backgroundColor: isEditMode ? '#28a745' : '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                    }}
                >
                    {isEditMode ? "💾 סיום עריכה (חזרה לתצוגה)" : "✏️ עריכת רשימה"}
                </button>
            </div>

            {/* כאן אנחנו קוראים לרכיב ה-ShopingList שהכנו */}
            <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '15px' }}>
                <ShopingList isEditMode={isEditMode} />
            </div>
            
        </div>
    );
};

export default ShoppingPage;