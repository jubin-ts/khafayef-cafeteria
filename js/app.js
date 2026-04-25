/* ============================================
   KHAFAYEF CAFETERIA - Main JavaScript
   Online Ordering System & Interactions
   ============================================ */

// ===== MENU DATA =====
const menuData = [
  // GRILLS
  { id: 'g1', name: 'Khafayef Platter', desc: 'Full charcoal mixed grill with Lebanese sides', price: 150.00, category: 'grills', icon: 'fas fa-drumstick-bite', color: '#ff6b35' },
  { id: 'g2', name: 'Mix Grill Large', desc: 'Mutton Tikka, Kebab, Lamb Chops, Arayes, Tawook', price: 115.00, category: 'grills', icon: 'fas fa-drumstick-bite', color: '#ff6b35' },
  { id: 'g3', name: 'Mix Grill Medium', desc: 'Mixed grill platter with bread & sides', price: 75.00, category: 'grills', icon: 'fas fa-drumstick-bite', color: '#ff6b35' },
  { id: 'g4', name: 'Mix Grill Small', desc: 'Mini mixed grill with bread & sides', price: 42.00, category: 'grills', icon: 'fas fa-drumstick-bite', color: '#ff6b35' },
  { id: 'g5', name: 'Shish Tawook', desc: 'Marinated chicken skewers charcoal grilled', price: 20.00, category: 'grills', icon: 'fas fa-fire', color: '#e74c3c' },
  { id: 'g6', name: 'Chicken Wings', desc: 'Charcoal grilled chicken wings', price: 23.00, category: 'grills', icon: 'fas fa-fire', color: '#e74c3c' },
  { id: 'g7', name: 'Mutton Tikka', desc: 'Tender mutton tikka charcoal grilled', price: 28.00, category: 'grills', icon: 'fas fa-fire', color: '#e74c3c' },
  { id: 'g8', name: 'Mini Mix Grill', desc: 'Mini charcoal mixed grill', price: 30.00, category: 'grills', icon: 'fas fa-drumstick-bite', color: '#ff6b35' },
  { id: 'g9', name: 'Eggplant Kabab', desc: 'Grilled eggplant kabab', price: 25.00, category: 'grills', icon: 'fas fa-fire', color: '#e74c3c' },
  { id: 'g10', name: 'Azmarly Kabab', desc: 'Traditional Azmarly style kabab', price: 36.00, category: 'grills', icon: 'fas fa-fire', color: '#e74c3c' },
  { id: 'g11', name: 'Arayes', desc: 'Grilled meat-stuffed Lebanese bread', price: 28.00, category: 'grills', icon: 'fas fa-fire', color: '#e74c3c' },
  { id: 'g12', name: 'Khafayef Sp. Charcoal', desc: 'Special charcoal grill with bread, hummus, salad & garlic', price: 42.00, category: 'grills', icon: 'fas fa-fire-flame-curved', color: '#ff6b35' },
  { id: 'g13', name: 'Chicken Peri Peri Charcoal', desc: 'Peri peri chicken grilled on charcoal', price: 44.00, category: 'grills', icon: 'fas fa-fire-flame-curved', color: '#e74c3c' },
  { id: 'g14', name: 'Pepper Chicken Charcoal', desc: 'Black pepper chicken charcoal grilled', price: 44.00, category: 'grills', icon: 'fas fa-fire-flame-curved', color: '#e74c3c' },
  { id: 'g15', name: 'Green Chilli Chicken Charcoal', desc: 'Spicy green chilli chicken on charcoal', price: 44.00, category: 'grills', icon: 'fas fa-fire-flame-curved', color: '#27ae60' },
  { id: 'g16', name: 'Arabic Chicken Charcoal', desc: 'Arabic style charcoal chicken', price: 37.00, category: 'grills', icon: 'fas fa-fire-flame-curved', color: '#f39c12' },
  { id: 'g17', name: 'Chicken Normal Charcoal', desc: 'Classic charcoal grilled chicken', price: 25.00, category: 'grills', icon: 'fas fa-fire-flame-curved', color: '#e67e22' },
  { id: 'g18', name: 'Chicken Tikka', desc: 'Tandoori chicken tikka', price: 26.00, category: 'grills', icon: 'fas fa-fire', color: '#e74c3c' },
  { id: 'g19', name: 'Grilled Pepper Hamour', desc: 'Fresh hamour with black pepper', price: 44.00, category: 'grills', icon: 'fas fa-fish', color: '#3498db' },
  { id: 'g20', name: 'Grilled Fresh Hamour', desc: 'Fresh hamour fish grilled to perfection', price: 55.00, category: 'grills', icon: 'fas fa-fish', color: '#3498db' },
  { id: 'g21', name: 'Grilled Sea Bream', desc: 'Whole sea bream grilled on charcoal', price: 45.00, category: 'grills', icon: 'fas fa-fish', color: '#3498db' },

  // MANDI & RICE
  { id: 'm1', name: 'Chicken Mandi', desc: 'Fragrant mandi rice with tender chicken', price: 24.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#f39c12' },
  { id: 'm2', name: 'Mutton Mandi', desc: 'Aromatic mandi rice with mutton', price: 45.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#f39c12' },
  { id: 'm3', name: 'Hamour Mandi Rice', desc: 'Mandi rice with fresh hamour fish', price: 60.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#3498db' },
  { id: 'm4', name: 'Sea Bream Mandi Rice', desc: 'Mandi rice with sea bream', price: 45.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#3498db' },
  { id: 'm5', name: 'Sea Bass Mandi Rice', desc: 'Mandi rice with sea bass', price: 45.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#3498db' },
  { id: 'm6', name: 'Salmon with Mandi Rice', desc: 'Premium salmon with mandi rice', price: 55.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#e74c3c' },
  { id: 'm7', name: 'Mazbi Chicken w. Mandi Rice', desc: 'Mazbi style chicken with mandi rice', price: 26.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#f39c12' },
  { id: 'm8', name: 'Mazbi Mutton w. Mandi Rice', desc: 'Mazbi style mutton with mandi rice', price: 45.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#f39c12' },
  { id: 'm9', name: 'Bukhari Chicken', desc: 'Chicken with aromatic bukhari rice', price: 21.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#e67e22' },
  { id: 'm10', name: 'Bukhari Mutton', desc: 'Mutton with aromatic bukhari rice', price: 27.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#e67e22' },
  { id: 'm11', name: 'Bukhari Hamour', desc: 'Hamour with bukhari rice', price: 55.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#3498db' },
  { id: 'm12', name: 'Zurbian Chicken', desc: 'Arabic spicy chicken zurbian rice', price: 30.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#e74c3c' },
  { id: 'm13', name: 'Zurbian Mutton', desc: 'Arabic spicy mutton zurbian', price: 45.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#e74c3c' },
  { id: 'm14', name: 'Mugalgal Chicken', desc: 'Stir-fried chicken mugalgal', price: 30.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#e67e22' },
  { id: 'm15', name: 'Mugalgal Beef', desc: 'Stir-fried beef mugalgal', price: 35.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#e67e22' },
  { id: 'm16', name: 'Charcoal Chicken Biriyani', desc: 'Biriyani with charcoal grilled chicken', price: 22.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#9b59b6' },
  { id: 'm17', name: 'King Fish Biriyani', desc: 'Biriyani with king fish', price: 16.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#3498db' },
  { id: 'm18', name: 'Grilled Fillet Hamour Biriyani', desc: 'Biriyani with grilled hamour fillet', price: 25.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#3498db' },
  { id: 'm19', name: 'Lamb Full Mandi', desc: 'Whole lamb with mandi rice', price: 500.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#e74c3c' },
  { id: 'm20', name: 'Madfoon Chicken', desc: 'Traditional chicken madfoon', price: 24.00, category: 'mandi', icon: 'fas fa-bowl-rice', color: '#f39c12' },

  // BROASTED
  { id: 'b1', name: 'Snack Meal', desc: '1 pc chicken + fries + bun + pepsi', price: 14.00, category: 'broasted', icon: 'fas fa-drumstick-bite', color: '#e74c3c' },
  { id: 'b2', name: 'Dinner Meal', desc: '3 pcs chicken + fries + bun + coleslaw + pepsi', price: 20.00, category: 'broasted', icon: 'fas fa-drumstick-bite', color: '#e74c3c' },
  { id: 'b3', name: 'Jumbo Meal', desc: '5 pcs chicken + fries + buns + coleslaw + pepsi', price: 27.00, category: 'broasted', icon: 'fas fa-drumstick-bite', color: '#e74c3c' },
  { id: 'b4', name: 'Mini Family Meal', desc: '5 pcs chicken + fries + bun + coleslaw + pepsi', price: 41.00, category: 'broasted', icon: 'fas fa-users', color: '#e67e22' },
  { id: 'b5', name: 'Family Meal', desc: '10 pcs chicken + fries + bun + coleslaw + pepsi', price: 57.00, category: 'broasted', icon: 'fas fa-users', color: '#e67e22' },
  { id: 'b6', name: 'Family Bucket', desc: '15 pcs chicken + fries + bun + coleslaw + pepsi', price: 75.00, category: 'broasted', icon: 'fas fa-users', color: '#e67e22' },
  { id: 'b7', name: 'Party Meal', desc: '20 pcs chicken + fries + 12 bun + coleslaw + pepsi', price: 95.00, category: 'broasted', icon: 'fas fa-champagne-glasses', color: '#f39c12' },
  { id: 'b8', name: 'Strips Meal', desc: 'Chicken strips + fries + bun + garlic + pepsi', price: 18.00, category: 'broasted', icon: 'fas fa-drumstick-bite', color: '#e74c3c' },
  { id: 'b9', name: 'Jumbo Strips Meal', desc: 'Extra strips + fries + bun + garlic + pepsi', price: 25.00, category: 'broasted', icon: 'fas fa-drumstick-bite', color: '#e74c3c' },
  { id: 'b10', name: 'Fried Chicken', desc: 'Crispy fried chicken pieces', price: 23.00, category: 'broasted', icon: 'fas fa-drumstick-bite', color: '#f39c12' },

  // SHAWARMA
  { id: 'sh1', name: 'Chicken Shawarma', desc: 'Classic chicken shawarma wrap', price: 5.50, category: 'shawarma', icon: 'fas fa-hotdog', color: '#e67e22' },
  { id: 'sh2', name: 'Arabic Shawarma', desc: 'Arabic style shawarma', price: 19.00, category: 'shawarma', icon: 'fas fa-hotdog', color: '#e67e22' },
  { id: 'sh3', name: 'Shawarma Plate', desc: 'Shawarma plate with sides', price: 21.00, category: 'shawarma', icon: 'fas fa-plate-wheat', color: '#e67e22' },
  { id: 'sh4', name: 'Kabab Sandwich', desc: 'Grilled kabab in bread', price: 12.00, category: 'shawarma', icon: 'fas fa-hotdog', color: '#e74c3c' },
  { id: 'sh5', name: 'Tikka Sandwich', desc: 'Chicken tikka sandwich', price: 12.00, category: 'shawarma', icon: 'fas fa-hotdog', color: '#e74c3c' },
  { id: 'sh6', name: 'Khafayef Mathar', desc: 'Special Khafayef sandwich', price: 7.00, category: 'shawarma', icon: 'fas fa-hotdog', color: '#f39c12' },
  { id: 'sh7', name: 'Falafel Mathar', desc: 'Falafel sandwich', price: 5.00, category: 'shawarma', icon: 'fas fa-hotdog', color: '#27ae60' },
  { id: 'sh8', name: 'Zinker Mathar', desc: 'Crispy zinker sandwich', price: 10.00, category: 'shawarma', icon: 'fas fa-hotdog', color: '#e74c3c' },

  // CHINESE
  { id: 'c1', name: 'Chicken Lollipop', desc: 'Crispy chicken lollipop appetizer', price: 22.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e74c3c' },
  { id: 'c2', name: 'Chicken 65', desc: 'Spicy deep-fried chicken 65', price: 19.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e74c3c' },
  { id: 'c3', name: 'Chicken Chilli', desc: 'Indo-Chinese chicken chilli', price: 19.00, category: 'chinese', icon: 'fas fa-pepper-hot', color: '#e74c3c' },
  { id: 'c4', name: 'Chicken Manchurian', desc: 'Crispy chicken in manchurian sauce', price: 19.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e67e22' },
  { id: 'c5', name: 'Garlic Chicken', desc: 'Chicken with garlic sauce', price: 19.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#f39c12' },
  { id: 'c6', name: 'Crispy Chicken', desc: 'Golden crispy fried chicken', price: 19.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e67e22' },
  { id: 'c7', name: 'Prawns Chilli', desc: 'Spicy prawns in chilli sauce', price: 22.00, category: 'chinese', icon: 'fas fa-shrimp', color: '#e74c3c' },
  { id: 'c8', name: 'Gobi Manchurian', desc: 'Cauliflower in manchurian sauce', price: 16.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#27ae60' },
  { id: 'c9', name: 'Fish Sweet & Sour', desc: 'Fish in sweet and sour sauce', price: 22.00, category: 'chinese', icon: 'fas fa-fish', color: '#f39c12' },
  { id: 'c10', name: 'Fish Manchurian', desc: 'Fish in manchurian sauce', price: 22.00, category: 'chinese', icon: 'fas fa-fish', color: '#e67e22' },
  { id: 'c11', name: 'Chicken Noodles', desc: 'Stir-fried noodles with chicken', price: 16.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#f39c12' },
  { id: 'c12', name: 'Schezwan Noodles', desc: 'Spicy schezwan style noodles', price: 16.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e74c3c' },
  { id: 'c13', name: 'Mixed Noodles', desc: 'Noodles with mixed veggies & meat', price: 20.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e67e22' },
  { id: 'c14', name: 'Chicken Fried Rice', desc: 'Fried rice with chicken', price: 16.00, category: 'chinese', icon: 'fas fa-bowl-rice', color: '#f39c12' },
  { id: 'c15', name: 'Prawns Fried Rice', desc: 'Fried rice with prawns', price: 18.00, category: 'chinese', icon: 'fas fa-bowl-rice', color: '#e74c3c' },
  { id: 'c16', name: 'Beef Fried Rice', desc: 'Fried rice with beef', price: 18.00, category: 'chinese', icon: 'fas fa-bowl-rice', color: '#e67e22' },

  // INDIAN
  { id: 'i1', name: 'Chicken Tikka Masala', desc: 'Creamy tomato-based chicken tikka curry', price: 23.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e74c3c' },
  { id: 'i2', name: 'Butter Chicken', desc: 'Rich and creamy butter chicken', price: 23.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e67e22' },
  { id: 'i3', name: 'Chicken Korma', desc: 'Mild creamy chicken korma', price: 19.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#f39c12' },
  { id: 'i4', name: 'Chicken Kadai', desc: 'Chicken cooked kadai style', price: 22.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e74c3c' },
  { id: 'i5', name: 'Chicken Handi', desc: 'Chicken in traditional handi pot', price: 22.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e67e22' },
  { id: 'i6', name: 'Mutton Kadai', desc: 'Mutton cooked kadai style', price: 19.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e74c3c' },
  { id: 'i7', name: 'Mutton Handi', desc: 'Mutton in traditional handi pot', price: 21.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e67e22' },
  { id: 'i8', name: 'Mutton Rogan Josh', desc: 'Aromatic mutton rogan josh', price: 22.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e74c3c' },
  { id: 'i9', name: 'Beef Masala', desc: 'Beef in rich masala gravy', price: 22.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#c0392b' },
  { id: 'i10', name: 'Beef Kadai', desc: 'Beef cooked kadai style', price: 22.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#c0392b' },
  { id: 'i11', name: 'Egg Masala', desc: 'Boiled eggs in masala curry', price: 10.00, category: 'indian', icon: 'fas fa-egg', color: '#f39c12' },
  { id: 'i12', name: 'Paneer Butter Masala', desc: 'Cottage cheese in butter masala', price: 18.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e67e22' },
  { id: 'i13', name: 'Dal Makhani', desc: 'Creamy black lentil dal', price: 12.00, category: 'indian', icon: 'fas fa-bowl-food', color: '#8e44ad' },
  { id: 'i14', name: 'Veg. Korma', desc: 'Mixed vegetable korma', price: 12.00, category: 'indian', icon: 'fas fa-leaf', color: '#27ae60' },
  { id: 'i15', name: 'Chicken Curry (2 Poratta)', desc: 'Chicken curry with 2 poratta', price: 10.00, category: 'indian', icon: 'fas fa-pepper-hot', color: '#e74c3c' },
  { id: 'i16', name: 'King Fish Masala', desc: 'King fish in spicy masala', price: 22.00, category: 'indian', icon: 'fas fa-fish', color: '#3498db' },
  { id: 'i17', name: 'Prawns/Sherry Masala', desc: 'Prawns in rich masala gravy', price: 30.00, category: 'indian', icon: 'fas fa-shrimp', color: '#e74c3c' },

  // BURGERS
  { id: 'bg1', name: 'Kentucky Burger', desc: 'Classic Kentucky style chicken burger', price: 13.00, category: 'burgers', icon: 'fas fa-burger', color: '#e67e22' },
  { id: 'bg2', name: 'Zinker Burger', desc: 'Crispy zinker chicken burger', price: 13.00, category: 'burgers', icon: 'fas fa-burger', color: '#e67e22' },
  { id: 'bg3', name: 'Cajun Burger', desc: 'Spicy cajun chicken burger', price: 14.00, category: 'burgers', icon: 'fas fa-burger', color: '#e74c3c' },
  { id: 'bg4', name: 'Vegetable Burger', desc: 'Fresh vegetable patty burger', price: 6.00, category: 'burgers', icon: 'fas fa-burger', color: '#27ae60' },
  { id: 'bg5', name: 'Fillet Burger', desc: 'Chicken fillet burger', price: 12.00, category: 'burgers', icon: 'fas fa-burger', color: '#e67e22' },
  { id: 'bg6', name: 'Tandoori Burger', desc: 'Tandoori spiced chicken burger', price: 12.00, category: 'burgers', icon: 'fas fa-burger', color: '#e74c3c' },
  { id: 'bg7', name: 'Italian Burger', desc: 'Italian style burger', price: 14.00, category: 'burgers', icon: 'fas fa-burger', color: '#27ae60' },
  { id: 'bg8', name: 'Spanish Burger', desc: 'Spanish style spicy burger', price: 14.00, category: 'burgers', icon: 'fas fa-burger', color: '#e74c3c' },
  { id: 'bg9', name: 'Italian Cheetos Burger', desc: 'Burger with cheetos & Italian sauce', price: 16.00, category: 'burgers', icon: 'fas fa-burger', color: '#f39c12' },
  { id: 'bg10', name: 'Spanish Cheetos Burger', desc: 'Burger with cheetos & Spanish sauce', price: 16.00, category: 'burgers', icon: 'fas fa-burger', color: '#e74c3c' },
  { id: 'bg11', name: 'Fish Burger', desc: 'Crispy fish fillet burger', price: 20.00, category: 'burgers', icon: 'fas fa-burger', color: '#3498db' },
  { id: 'bg12', name: 'Zinger Cheetos Burger', desc: 'Zinger with crunchy cheetos', price: 16.00, category: 'burgers', icon: 'fas fa-burger', color: '#f39c12' },
  { id: 'bg13', name: 'Khafayef Burger', desc: 'Signature Khafayef special burger', price: 12.00, category: 'burgers', icon: 'fas fa-burger', color: '#ff6b35' },
  { id: 'bg14', name: 'Khaleej Burger', desc: 'Gulf style special burger', price: 12.00, category: 'burgers', icon: 'fas fa-burger', color: '#f39c12' },
  { id: 'bg15', name: 'Fresh Burger', desc: 'Fresh premium beef burger', price: 21.00, category: 'burgers', icon: 'fas fa-burger', color: '#e74c3c' },
  { id: 'bg16', name: 'Fresh Cheetos Burger', desc: 'Fresh burger with cheetos', price: 23.00, category: 'burgers', icon: 'fas fa-burger', color: '#f39c12' },
  { id: 'bg17', name: 'Grilled Fresh Double Burger', desc: 'Double patty grilled burger', price: 28.00, category: 'burgers', icon: 'fas fa-burger', color: '#c0392b' },
  { id: 'bg18', name: 'Smile Burger', desc: 'Special smile burger', price: 23.00, category: 'burgers', icon: 'fas fa-burger', color: '#f39c12' },
  { id: 'bg19', name: 'Expo Burger', desc: 'Expo special edition burger', price: 16.00, category: 'burgers', icon: 'fas fa-burger', color: '#3498db' },
  { id: 'bg20', name: 'Dynamite Chicken Burger', desc: 'Spicy dynamite chicken burger', price: 18.00, category: 'burgers', icon: 'fas fa-burger', color: '#e74c3c' },
  { id: 'bg21', name: 'Grilled Turkey Burger', desc: 'Healthy grilled turkey patty burger', price: 21.00, category: 'burgers', icon: 'fas fa-burger', color: '#27ae60' },

  // WRAPS
  { id: 'w1', name: 'Shawarma Wrap', desc: 'Classic shawarma in wrap', price: 10.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'w2', name: 'Dynamite Wrap', desc: 'Spicy dynamite chicken wrap', price: 13.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'w3', name: 'Chilli Wrap', desc: 'Chicken chilli wrap', price: 13.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'w4', name: 'Tikka Wrap', desc: 'Chicken tikka wrap', price: 19.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'w5', name: 'Cajun Wrap', desc: 'Cajun spiced chicken wrap', price: 13.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#f39c12' },
  { id: 'w6', name: 'Chi. Nuggets Wrap', desc: 'Chicken nuggets in wrap', price: 13.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'w7', name: 'Hotdog Wrap', desc: 'Hotdog in a wrap', price: 12.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'w8', name: 'Jumbo Prawns Wrap', desc: 'Jumbo prawns in wrap', price: 13.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'w9', name: 'Veg./Falafel Wrap', desc: 'Vegetable or falafel wrap', price: 12.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#27ae60' },
  { id: 'w10', name: 'Crunchy Wraptor', desc: 'Crunchy chicken wraptor', price: 18.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'w11', name: 'Cheesy Wraptor', desc: 'Cheesy chicken wraptor', price: 18.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#f39c12' },

  // STARTERS & SIDES
  { id: 'st1', name: 'French Fries', desc: 'Crispy golden french fries', price: 6.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#f39c12' },
  { id: 'st2', name: 'Spicy French Fries', desc: 'Seasoned spicy fries', price: 8.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#e74c3c' },
  { id: 'st3', name: 'Falafel Plate', desc: 'Crispy falafel with tahini', price: 13.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#27ae60' },
  { id: 'st4', name: 'Mozzarella Stick', desc: 'Fried mozzarella sticks', price: 17.00, category: 'starters', icon: 'fas fa-cheese', color: '#f39c12' },
  { id: 'st5', name: 'Chicken Nuggets', desc: 'Crispy chicken nuggets', price: 16.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#e67e22' },
  { id: 'st6', name: 'Chicken Popcorn', desc: 'Bite-sized chicken popcorn', price: 13.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#e67e22' },
  { id: 'st7', name: 'Onion Rings', desc: 'Crispy fried onion rings', price: 13.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#f39c12' },
  { id: 'st8', name: 'Potato Wedges', desc: 'Seasoned potato wedges', price: 13.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#e67e22' },
  { id: 'st9', name: 'Butterfly Prawns', desc: 'Crispy butterfly prawns', price: 23.00, category: 'starters', icon: 'fas fa-shrimp', color: '#e74c3c' },
  { id: 'st10', name: 'Spring Roll (Chi/Veg)', desc: 'Chicken or vegetable spring rolls', price: 14.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#27ae60' },
  { id: 'st11', name: 'Kids Meal', desc: 'Special kids meal combo', price: 13.00, category: 'starters', icon: 'fas fa-child', color: '#3498db' },
  { id: 'st12', name: 'Hummus', desc: 'Creamy chickpea hummus', price: 10.00, category: 'starters', icon: 'fas fa-bowl-food', color: '#f39c12' },
  { id: 'st13', name: 'Hummus w. Meat', desc: 'Hummus topped with seasoned meat', price: 24.00, category: 'starters', icon: 'fas fa-bowl-food', color: '#e67e22' },
  { id: 'st14', name: 'Tabbouleh Salad', desc: 'Fresh Lebanese tabbouleh', price: 13.00, category: 'starters', icon: 'fas fa-salad', color: '#27ae60' },
  { id: 'st15', name: 'Fattoush', desc: 'Classic Arabic fattoush salad', price: 13.00, category: 'starters', icon: 'fas fa-salad', color: '#27ae60' },
  { id: 'st16', name: 'Greek Salad', desc: 'Fresh Greek salad', price: 12.00, category: 'starters', icon: 'fas fa-salad', color: '#27ae60' },
  { id: 'st17', name: 'Khafayef Special Salad', desc: 'Our signature special salad', price: 12.00, category: 'starters', icon: 'fas fa-salad', color: '#27ae60' },
  { id: 'st18', name: 'Avocado Salad', desc: 'Fresh avocado salad', price: 20.00, category: 'starters', icon: 'fas fa-salad', color: '#27ae60' },
  { id: 'st19', name: 'Shakshuka Plate', desc: 'Eggs poached in spiced tomato sauce', price: 12.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#e74c3c' },
  { id: 'st20', name: 'Loaded Fries', desc: 'Fries loaded with cheese & toppings', price: 16.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#f39c12' },
  { id: 'st21', name: 'Dynamite Shrimps', desc: 'Crispy dynamite shrimp bites', price: 24.00, category: 'starters', icon: 'fas fa-shrimp', color: '#e74c3c' },
  { id: 'st22', name: 'Dynamite Chicken', desc: 'Spicy dynamite chicken bites', price: 16.00, category: 'starters', icon: 'fas fa-plate-wheat', color: '#e74c3c' },
  { id: 'st23', name: 'Veg. Soup', desc: 'Fresh vegetable soup', price: 10.00, category: 'starters', icon: 'fas fa-mug-hot', color: '#27ae60' },
  { id: 'st24', name: 'Chicken Cream Soup', desc: 'Creamy chicken soup', price: 12.00, category: 'starters', icon: 'fas fa-mug-hot', color: '#f39c12' },
  { id: 'st25', name: 'Mutton Soup', desc: 'Rich mutton bone soup', price: 35.00, category: 'starters', icon: 'fas fa-mug-hot', color: '#e67e22' },
  { id: 'st26', name: 'Hot N Sour Soup', desc: 'Spicy hot and sour soup', price: 12.00, category: 'starters', icon: 'fas fa-mug-hot', color: '#e74c3c' },

  // BEVERAGES
  { id: 'bv1', name: 'Fresh Bottle Juice (1L)', desc: 'Freshly squeezed juice bottle', price: 32.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#f39c12' },
  { id: 'bv2', name: 'Lemon Mint Mojito', desc: 'Refreshing lemon mint mojito', price: 12.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#27ae60' },
  { id: 'bv3', name: 'Strawberry Mojito', desc: 'Sweet strawberry mojito', price: 12.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#e74c3c' },
  { id: 'bv4', name: 'Passion Fruit Mojito', desc: 'Tropical passion fruit mojito', price: 12.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#f39c12' },
  { id: 'bv5', name: 'Watermelon Mojito', desc: 'Fresh watermelon mojito', price: 12.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#e74c3c' },
  { id: 'bv6', name: 'Black Berry Mojito', desc: 'Blackberry flavored mojito', price: 12.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#8e44ad' },
  { id: 'bv7', name: 'Pineapple Mojito', desc: 'Tropical pineapple mojito', price: 12.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#f39c12' },
  { id: 'bv8', name: 'Pomegranate Mojito', desc: 'Pomegranate flavored mojito', price: 12.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#e74c3c' },
  { id: 'bv9', name: 'Blue Sky Mojito', desc: 'Blue curacao mojito', price: 12.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#3498db' },
  { id: 'bv10', name: 'Mango Falooda', desc: 'Rich mango falooda dessert drink', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#f39c12' },
  { id: 'bv11', name: 'Strawberry Falooda', desc: 'Strawberry falooda dessert drink', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#e74c3c' },
  { id: 'bv12', name: 'Avocado Falooda', desc: 'Creamy avocado falooda', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#27ae60' },
  { id: 'bv13', name: 'Special Falooda', desc: 'Khafayef special falooda', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#9b59b6' },
  { id: 'bv14', name: 'Pistachio Shake', desc: 'Rich pistachio milkshake', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#27ae60' },
  { id: 'bv15', name: 'Nutella Crush Milk', desc: 'Nutella flavored crush milk', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#8e44ad' },
  { id: 'bv16', name: 'Lotus Crush Milk', desc: 'Lotus biscoff crush milk', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#e67e22' },
  { id: 'bv17', name: 'Oreo Crush Milk', desc: 'Oreo flavored crush milk', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#2c3e50' },
  { id: 'bv18', name: 'Galaxy Crush Milk', desc: 'Galaxy chocolate crush milk', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#8e44ad' },
  { id: 'bv19', name: 'Karak Tea', desc: 'Traditional UAE karak chai', price: 3.00, category: 'beverages', icon: 'fas fa-mug-hot', color: '#e67e22' },
  { id: 'bv20', name: 'Cappuccino', desc: 'Italian style cappuccino', price: 8.00, category: 'beverages', icon: 'fas fa-mug-hot', color: '#8e44ad' },
  { id: 'bv21', name: 'Kashmiri Tea', desc: 'Pink Kashmiri chai', price: 10.00, category: 'beverages', icon: 'fas fa-mug-hot', color: '#e74c3c' },
  { id: 'bv22', name: 'Fresh Milk Zafran', desc: 'Saffron flavored fresh milk', price: 15.00, category: 'beverages', icon: 'fas fa-glass-water-droplet', color: '#f39c12' },

  // DESSERTS
  { id: 'd1', name: 'Kunafa Pistachio', desc: 'Premium pistachio kunafa', price: 18.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#27ae60' },
  { id: 'd2', name: 'Kunafa Chocolate Mix', desc: 'Chocolate mixed kunafa', price: 18.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#8e44ad' },
  { id: 'd3', name: 'Kunafa w. Nutella', desc: 'Kunafa filled with Nutella', price: 16.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#e67e22' },
  { id: 'd4', name: 'Kunafa Normal', desc: 'Traditional cheese kunafa', price: 14.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#f39c12' },
  { id: 'd5', name: 'Kunafa Special', desc: 'Chef\'s special kunafa creation', price: 19.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#e74c3c' },
  { id: 'd6', name: 'Pancake Pistachio', desc: 'Pancakes with pistachio cream', price: 20.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#27ae60' },
  { id: 'd7', name: 'Pancake Nutella w. Lotus', desc: 'Pancakes with Nutella and Lotus', price: 21.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#e67e22' },
  { id: 'd8', name: 'Pancake Strawberry', desc: 'Pancakes with strawberry topping', price: 18.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#e74c3c' },
  { id: 'd9', name: 'Lotus Ice Cream', desc: 'Creamy Lotus biscoff ice cream', price: 12.00, category: 'desserts', icon: 'fas fa-ice-cream', color: '#e67e22' },
  { id: 'd10', name: 'Fruit Salad', desc: 'Fresh seasonal fruit salad', price: 15.00, category: 'desserts', icon: 'fas fa-apple-whole', color: '#27ae60' },
  { id: 'd11', name: 'Mango Bricks', desc: 'Mango flavored dessert bricks', price: 12.00, category: 'desserts', icon: 'fas fa-cookie-bite', color: '#f39c12' },
  { id: 'd12', name: 'Sahlab', desc: 'Warm creamy sahlab drink', price: 10.00, category: 'desserts', icon: 'fas fa-mug-hot', color: '#f5f5dc' },

  // PORATTA
  { id: 'p1', name: 'Mathafi Poratta', desc: 'Special Mathafi style poratta', price: 12.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'p2', name: 'London Poratta', desc: 'London style poratta', price: 13.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'p3', name: 'Dynamite Chicken Poratta', desc: 'Spicy dynamite chicken poratta', price: 14.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'p4', name: 'Shawarma Poratta', desc: 'Shawarma filled poratta', price: 6.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'p5', name: 'Tikka Poratta', desc: 'Chicken tikka poratta', price: 6.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'p6', name: 'Fillet Poratta', desc: 'Chicken fillet poratta', price: 6.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'p7', name: 'Shrimps Poratta', desc: 'Shrimps filled poratta', price: 11.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'p8', name: 'Francisco Poratta', desc: 'Special Francisco style poratta', price: 6.50, category: 'wraps', icon: 'fas fa-bread-slice', color: '#f39c12' },
  { id: 'p9', name: 'Egg/Omelette Poratta', desc: 'Egg or omelette poratta', price: 3.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#f39c12' },
  { id: 'p10', name: 'Nutella Poratta', desc: 'Sweet Nutella poratta', price: 5.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#8e44ad' },
  { id: 'p11', name: 'Cheetos Poratta', desc: 'Crunchy cheetos poratta', price: 9.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#f39c12' },

  // INDOMIE
  { id: 'in1', name: 'Chicken Indomie', desc: 'Indomie noodles with chicken', price: 10.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e67e22' },
  { id: 'in2', name: 'Prawns Indomie', desc: 'Indomie noodles with prawns', price: 12.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e74c3c' },
  { id: 'in3', name: 'Mix Indomie', desc: 'Mixed indomie noodles', price: 12.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#f39c12' },
  { id: 'in4', name: 'Cheetos Indomie', desc: 'Indomie with crunchy cheetos', price: 12.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e67e22' },
  { id: 'in5', name: 'Zinker Indomie', desc: 'Indomie with crispy zinker', price: 12.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#e74c3c' },
  { id: 'in6', name: 'Egg Indomie', desc: 'Indomie with egg', price: 8.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#f39c12' },
  { id: 'in7', name: 'Cheese Indomie', desc: 'Cheesy indomie noodles', price: 10.00, category: 'chinese', icon: 'fas fa-bowl-food', color: '#f39c12' },

  // CLUB SANDWICHES
  { id: 'cl1', name: 'Chicken/Beef Club', desc: 'Classic chicken or beef club sandwich', price: 15.00, category: 'shawarma', icon: 'fas fa-bread-slice', color: '#e67e22' },
  { id: 'cl2', name: 'Zinker Club', desc: 'Crispy zinker club sandwich', price: 16.00, category: 'shawarma', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'cl3', name: 'Italian Club', desc: 'Italian style club sandwich', price: 16.00, category: 'shawarma', icon: 'fas fa-bread-slice', color: '#27ae60' },
  { id: 'cl4', name: 'Spanish Club', desc: 'Spanish style club sandwich', price: 16.00, category: 'shawarma', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'cl5', name: 'Vegetable Club', desc: 'Fresh vegetable club sandwich', price: 14.00, category: 'shawarma', icon: 'fas fa-bread-slice', color: '#27ae60' },
  { id: 'cl6', name: 'Rolex Club', desc: 'Special Rolex club sandwich', price: 15.00, category: 'shawarma', icon: 'fas fa-bread-slice', color: '#f39c12' },

  // PASTA
  { id: 'pa1', name: 'Red Sauce Pasta', desc: 'Classic pasta in red tomato sauce', price: 19.00, category: 'indian', icon: 'fas fa-bowl-food', color: '#e74c3c' },
  { id: 'pa2', name: 'White Pasta', desc: 'Creamy white sauce pasta', price: 19.00, category: 'indian', icon: 'fas fa-bowl-food', color: '#f5f5dc' },
  { id: 'pa3', name: 'Mix Pasta', desc: 'Mixed sauce pasta', price: 20.00, category: 'indian', icon: 'fas fa-bowl-food', color: '#e67e22' },
  { id: 'pa4', name: 'Shrimps Pasta', desc: 'Pasta with prawns', price: 22.00, category: 'indian', icon: 'fas fa-bowl-food', color: '#e74c3c' },
  { id: 'pa5', name: 'Seafood Pasta', desc: 'Pasta with mixed seafood', price: 24.00, category: 'indian', icon: 'fas fa-bowl-food', color: '#3498db' },

  // COMBOS
  { id: 'co1', name: 'Tandoori Combo', desc: 'Tandoori chicken combo meal', price: 11.00, category: 'broasted', icon: 'fas fa-box', color: '#e74c3c' },
  { id: 'co2', name: 'Cajun Combo', desc: 'Cajun spiced combo meal', price: 11.00, category: 'broasted', icon: 'fas fa-box', color: '#f39c12' },
  { id: 'co3', name: 'Shish Tawook Combo', desc: 'Shish tawook combo meal', price: 11.00, category: 'broasted', icon: 'fas fa-box', color: '#e67e22' },
  { id: 'co4', name: 'Kabab Combo', desc: 'Kabab combo meal', price: 11.00, category: 'broasted', icon: 'fas fa-box', color: '#e74c3c' },
  { id: 'co5', name: 'Grilled Combo', desc: 'Grilled chicken combo meal', price: 11.00, category: 'broasted', icon: 'fas fa-box', color: '#e67e22' },
  { id: 'co6', name: 'Thighs Combo', desc: 'Chicken thighs combo meal', price: 11.00, category: 'broasted', icon: 'fas fa-box', color: '#e74c3c' },
  { id: 'co7', name: 'Chi. Nuggets Combo', desc: 'Chicken nuggets combo meal', price: 11.00, category: 'broasted', icon: 'fas fa-box', color: '#f39c12' },
  { id: 'co8', name: 'Dynamite Zinker Combo', desc: 'Spicy dynamite zinker combo', price: 16.00, category: 'broasted', icon: 'fas fa-box', color: '#e74c3c' },
  { id: 'co9', name: 'Crunchy Beef Combo', desc: 'Crunchy beef combo meal', price: 16.00, category: 'broasted', icon: 'fas fa-box', color: '#c0392b' },

  // DIET CORNER
  { id: 'dt1', name: 'Kuku Nasar', desc: 'Healthy grilled kuku nasar', price: 20.00, category: 'starters', icon: 'fas fa-heart-pulse', color: '#27ae60' },
  { id: 'dt2', name: 'Kuku Arabic', desc: 'Arabic style kuku', price: 18.00, category: 'starters', icon: 'fas fa-heart-pulse', color: '#27ae60' },
  { id: 'dt3', name: 'Tandoori Arabic', desc: 'Diet tandoori Arabic style', price: 19.00, category: 'starters', icon: 'fas fa-heart-pulse', color: '#e74c3c' },
  { id: 'dt4', name: 'Zinker Arabic', desc: 'Diet zinker Arabic style', price: 16.00, category: 'starters', icon: 'fas fa-heart-pulse', color: '#e67e22' },
  { id: 'dt5', name: 'Shish Tawook Arabic', desc: 'Diet shish tawook Arabic', price: 16.00, category: 'starters', icon: 'fas fa-heart-pulse', color: '#f39c12' },
  { id: 'dt6', name: 'Chicken Breast', desc: 'Grilled chicken breast (diet)', price: 10.00, category: 'starters', icon: 'fas fa-heart-pulse', color: '#27ae60' },
  { id: 'dt7', name: 'Breakfast Diet Meal', desc: 'Healthy breakfast diet meal', price: 18.00, category: 'starters', icon: 'fas fa-heart-pulse', color: '#27ae60' },
  { id: 'dt8', name: 'Avocado Egg Toast', desc: 'Avocado on toast with egg', price: 10.00, category: 'starters', icon: 'fas fa-heart-pulse', color: '#27ae60' },

  // ZAKIS SPECIAL
  { id: 'z1', name: 'Zakis Burger', desc: 'Special crispy Zakis burger', price: 16.00, category: 'burgers', icon: 'fas fa-burger', color: '#ff6b35' },
  { id: 'z2', name: 'Zakis Kuku', desc: 'Zakis style kuku', price: 22.00, category: 'burgers', icon: 'fas fa-burger', color: '#ff6b35' },
  { id: 'z3', name: 'Zakis Finger', desc: 'Crispy Zakis chicken fingers', price: 18.00, category: 'burgers', icon: 'fas fa-burger', color: '#ff6b35' },
  { id: 'z4', name: 'Zakis Loaded Chicken', desc: 'Loaded chicken Zakis style', price: 15.00, category: 'burgers', icon: 'fas fa-burger', color: '#ff6b35' },
  { id: 'z5', name: 'Zakis Combo', desc: 'Full Zakis combo meal', price: 21.00, category: 'burgers', icon: 'fas fa-burger', color: '#ff6b35' },
  { id: 'z6', name: 'Popcorn Cheese', desc: 'Cheesy chicken popcorn bites', price: 16.00, category: 'burgers', icon: 'fas fa-burger', color: '#f39c12' },

  // SPANISH/ITALIAN SPECIAL
  { id: 'sp5', name: 'Spanish Twister', desc: 'Spicy Spanish twister wrap', price: 15.00, category: 'wraps', icon: 'fas fa-bread-slice', color: '#e74c3c' },
  { id: 'sp6', name: 'Spicy Italian Double Zinker', desc: 'Double zinker Italian spicy', price: 20.00, category: 'burgers', icon: 'fas fa-burger', color: '#27ae60' },
  { id: 'sp7', name: 'Spicy Spanish Double Zinker', desc: 'Double zinker Spanish spicy', price: 20.00, category: 'burgers', icon: 'fas fa-burger', color: '#e74c3c' },

  // FRESH BURGERS
  { id: 'fb1', name: 'Fresh Ruman Burger', desc: 'Premium fresh Ruman burger', price: 23.00, category: 'burgers', icon: 'fas fa-burger', color: '#27ae60' },
  { id: 'fb2', name: 'Fresh Burger Mushroom', desc: 'Fresh burger with mushroom', price: 23.00, category: 'burgers', icon: 'fas fa-burger', color: '#8e44ad' },
  { id: 'fb3', name: 'Jumbo Prawns Burger', desc: 'Large prawns burger', price: 20.00, category: 'burgers', icon: 'fas fa-burger', color: '#e74c3c' },
];

// ===== APP STATE =====
let cart = [];
let currentCategory = 'all';
let displayCount = 24;
const ITEMS_PER_LOAD = 12;
const VALID_CATEGORIES = ['grills', 'mandi', 'broasted', 'shawarma', 'chinese', 'indian', 'burgers', 'wraps', 'starters', 'beverages', 'desserts'];

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavigation();
  initHeroParticles();
  initCounters();
  initMenuGrid();
  initMenuTabs();
  initMenuSearch();
  initCart();
  initBackToTop();
  initScrollEffects();
  initAOS();
  initHashCategoryFilter();
  initLazyMap();
});

// ===== PRELOADER =====
function initPreloader() {
  // Ensure page starts at hero section on initial load
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.getElementById('preloader').classList.add('loaded');
    }, 800);
  });
  // Fallback in case load event already fired
  setTimeout(() => {
    document.getElementById('preloader').classList.add('loaded');
  }, 3000);
}

// ===== NAVIGATION =====
function initNavigation() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Mobile toggle
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ===== HERO PARTICLES =====
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (4 + Math.random() * 4) + 's';
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

// ===== COUNTER ANIMATION =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
  const duration = 2000;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.floor(eased * target);

    if (target >= 1000) {
      el.textContent = current.toLocaleString();
    } else {
      el.textContent = current;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ===== MENU GRID =====
function initMenuGrid() {
  renderMenuItems();

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      displayCount += ITEMS_PER_LOAD;
      renderMenuItems();
    });
  }
}

function getFilteredItems() {
  let items = menuData;

  if (currentCategory !== 'all') {
    items = items.filter(item => item.category === currentCategory);
  }

  const searchValue = document.getElementById('menuSearch')?.value?.toLowerCase() || '';
  if (searchValue) {
    items = items.filter(item =>
      item.name.toLowerCase().includes(searchValue) ||
      item.desc.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue)
    );
  }

  return items;
}

function renderMenuItems() {
  const grid = document.getElementById('menuGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!grid) return;

  const items = getFilteredItems();
  const visibleItems = items.slice(0, displayCount);

  grid.innerHTML = visibleItems.map((item, index) => `
    <div class="menu-item" style="animation-delay: ${index * 0.03}s" data-category="${item.category}">
      <div class="menu-item-icon" style="background: linear-gradient(135deg, ${item.color}, ${item.color}dd);">
        <i class="${item.icon}"></i>
      </div>
      <div class="menu-item-info">
        <div class="menu-item-name">${escapeHTML(item.name)}</div>
        <div class="menu-item-desc">${escapeHTML(item.desc)}</div>
      </div>
      <div class="menu-item-action">
        <div class="menu-item-price">AED ${item.price.toFixed(2)}</div>
        <button class="menu-add-btn add-to-cart-btn"
                data-id="${item.id}"
                data-name="${escapeHTML(item.name)}"
                data-price="${item.price}"
                data-category="${item.category}"
                aria-label="Add ${escapeHTML(item.name)} to cart">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Show/hide load more
  if (loadMoreBtn) {
    loadMoreBtn.style.display = visibleItems.length < items.length ? 'inline-flex' : 'none';
  }

  // Rebind add-to-cart buttons
  grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart({
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: parseFloat(btn.dataset.price),
        category: btn.dataset.category
      });
    });
  });
}

// ===== MENU TABS =====
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      displayCount = 24;
      renderMenuItems();
    });
  });
}

// ===== MENU SEARCH =====
function initMenuSearch() {
  const searchInput = document.getElementById('menuSearch');
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      displayCount = 24;
      renderMenuItems();
    }, 300);
  });
}

// ===== CART SYSTEM =====
function initCart() {
  const cartBtn = document.getElementById('cartBtn');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');
  const checkoutWhatsApp = document.getElementById('checkoutWhatsApp');
  const checkoutCall = document.getElementById('checkoutCall');
  const clearCartBtn = document.getElementById('clearCart');

  cartBtn?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);
  checkoutWhatsApp?.addEventListener('click', orderViaWhatsApp);
  checkoutCall?.addEventListener('click', orderViaCall);
  clearCartBtn?.addEventListener('click', clearCart);

  // Handle add-to-cart from specials section
  document.querySelectorAll('.special-card .add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart({
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: parseFloat(btn.dataset.price),
        category: btn.dataset.category
      });
    });
  });

  // Load cart from localStorage
  const savedCart = localStorage.getItem('khafayef_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCartUI();
    } catch {
      cart = [];
    }
  }
}

function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${item.name} added to cart!`);
  bumpCartCount();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Cart cleared');
}

function saveCart() {
  localStorage.setItem('khafayef_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  const cartSubtotal = document.getElementById('cartSubtotal');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cartCount) cartCount.textContent = totalQty;

  if (cart.length === 0) {
    if (cartEmpty) cartEmpty.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
    // Clear non-empty items
    const existingItems = cartItems?.querySelectorAll('.cart-item');
    existingItems?.forEach(el => el.remove());
  } else {
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';
    if (cartSubtotal) cartSubtotal.textContent = `AED ${subtotal.toFixed(2)}`;

    // Render cart items
    const existingItems = cartItems?.querySelectorAll('.cart-item');
    existingItems?.forEach(el => el.remove());

    cart.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHTML(item.name)}</div>
          <div class="cart-item-cat">${item.category}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn qty-minus" data-id="${item.id}" aria-label="Decrease quantity">
            <i class="fas fa-minus"></i>
          </button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn qty-plus" data-id="${item.id}" aria-label="Increase quantity">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="cart-item-price">AED ${(item.price * item.qty).toFixed(2)}</div>
        <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">
          <i class="fas fa-trash-alt"></i>
        </button>
      `;

      el.querySelector('.qty-minus').addEventListener('click', () => updateQty(item.id, -1));
      el.querySelector('.qty-plus').addEventListener('click', () => updateQty(item.id, 1));
      el.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.id));

      cartItems?.insertBefore(el, cartEmpty);
    });
  }
}

function openCart() {
  document.getElementById('cartSidebar')?.classList.add('active');
  document.getElementById('cartOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('active');
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  if (el) {
    el.classList.remove('bump');
    void el.offsetWidth; // trigger reflow
    el.classList.add('bump');
  }
}

// ===== WHATSAPP ORDER =====
function orderViaWhatsApp() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let message = '🍽️ *New Order from Khafayef Website*\n\n';
  message += '📋 *Order Details:*\n';
  message += '─────────────────\n';

  cart.forEach((item, i) => {
    message += `${i + 1}. ${item.name} x${item.qty} — AED ${(item.price * item.qty).toFixed(2)}\n`;
  });

  message += '─────────────────\n';
  message += `💰 *Subtotal: AED ${subtotal.toFixed(2)}*\n\n`;
  message += '📍 *Delivery Address:* \n';
  message += '📞 *Contact:* \n\n';
  message += '_Please confirm the order and delivery details._';

  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/971507990910?text=${encodedMsg}`, '_blank');

  closeCart();
}

function orderViaCall() {
  window.location.href = 'tel:+971507990910';
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i><span>${escapeHTML(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
  // Parallax effect for hero
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-parallax');
    if (hero) {
      const scrolled = window.scrollY;
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
}

// ===== AOS INIT =====
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: window.innerWidth < 768
    });
  }
}

// ===== UTILITY =====
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== HASH-BASED CATEGORY FILTER =====
function initHashCategoryFilter() {
  function applyHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && VALID_CATEGORIES.includes(hash)) {
      const tab = document.querySelector(`.menu-tab[data-category="${hash}"]`);
      if (tab) {
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = hash;
        displayCount = 24;
        renderMenuItems();
        setTimeout(() => {
          const menuSection = document.getElementById('menu');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }
    }
  }
  // Apply on initial load (after preloader)
  setTimeout(applyHash, 1200);
  // Apply when hash changes (e.g. clicking internal links)
  window.addEventListener('hashchange', applyHash);
}

// ===== LAZY MAP LOADING =====
function initLazyMap() {
  const mapIframe = document.getElementById('contactMap');
  const placeholder = document.getElementById('mapPlaceholder');
  if (!mapIframe || !placeholder) return;

  function loadMap() {
    const src = mapIframe.getAttribute('data-src');
    if (src && !mapIframe.src) {
      mapIframe.src = src;
      mapIframe.style.display = 'block';
      placeholder.style.display = 'none';
    }
  }

  // Load on click
  placeholder.addEventListener('click', loadMap);

  // Also load when section scrolls into view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadMap();
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    observer.observe(mapIframe.parentElement);
  }
}
