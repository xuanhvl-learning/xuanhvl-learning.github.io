---
layout: post
title: "[Game Theory- P3]: Giảm Giá & Giảm Não – Khi 4 Chàng Trai Tán 1 Crush Bằng Cách Bắn Quà"
date: 2025-07-30
category: economics
excerpt: "Phân tích câu chuyện Tình yêu, Kinh doanh dưới góc nhìn Lý thuyết trò chơi (Game Theory): Loại trò chơi, Ma trận lợi ích, Cân bằng Nash (1950), Thống kê Bayses."
---

0. Mở đầu – Tán tỉnh & chạy khuyến mãi: đều là nghệ thuật “giảm giá chính mình”
Trong tình yêu, bạn gọi là tán tỉnh (flirting).
Trong kinh doanh, bạn gọi là chạy khuyến mãi.
Cả hai đều đang “giảm giá bản thân” để được chọn.
Bạn mời crush đi xem phim, bao trà sữa, nhắn tin lúc nửa đêm dù sáng hôm sau họ vẫn seen mà không rep.
Doanh nghiệp thì tặng voucher, giảm giá 50%, free shipping.
→ Câu hỏi đặt ra: giảm giá có khiến bạn “được yêu” – hay chỉ được lợi dụng và rút cạn ví?

1. Phân tích trò chơi – Khuyến mãi là một ván cược không ai muốn chơi mà vẫn phải chơi
Đây là một trò chơi thuộc dạng:
 • Tổng khác không (Non-Zero Sum Game): không phải cứ bạn lời thì tôi lỗ. Nếu cả hai cùng giữ giá, ngành có thể cùng lãi.
 • Thiếu thông tin (Imperfect Information): không biết chắc đối thủ có giảm giá không, khách hàng có trung thành không, ai sẽ là người đầu tiên “phản bội”.
 • Thế tiến thoái lưỡng nan của người tù (Prisoner’s Dilemma):
 • Nếu ai cũng giữ giá → đôi bên cùng có lợi.
 • Nếu bạn giữ giá, đối thủ giảm → bạn mất khách.
 • Nếu bạn cũng giảm để đáp trả → ai cũng sống sót trong mệt mỏi.
🧠 Kết luận:
→ Game này không ai muốn bắt đầu, nhưng ai cũng buộc phải nhảy vào vì sợ bị bỏ lại.

2.📊 Phân loại người chơi trong tình yêu & kinh doanh
Bốn kiểu “tán tỉnh” trong tình yêu và thương trường
🏆 Market Leader
* 💼 Doanh nghiệp: Đầu ngành, chuỗi cung ứng mạnh
* 💘 Tình yêu: Thanh mai trúc mã – chiếm slot trong lòng crush
* 🛡️ Chiến lược: Phòng thủ, phủ sóng toàn thị trường, đa dạng hóa sản phẩm (như Masan ngành gia vị, thấy rõ nhất là sản phẩm nước mắm á)
⚔️ Challenger 
* 💼 Doanh nghiệp: Kẻ thách thức, máu chiến, muốn lật đổ top 1
* 💘 Tình yêu: Tình địch truyền kiếp – bạn thích ai là nó tán
* 🎯 Chiến lược: Tấn công trực diện vào điểm yếu (như OMC và KKM đánh vào hình ảnh Hảo Hảo)
🔎 Niche Player
* 💼 Doanh nghiệp: Đánh vào thị trường ngách, khác biệt hóa
* 💘 Tình yêu: Tán đúng người – chọn mục tiêu rõ ràng
* 📐 Chiến lược: Cạnh sườn – tạo đại dương xanh riêng (ví dụ: OMC mì khoai tây, xúc xích lắc Heo Cao Bồi)
💣 Guerrilla
* 💼 Doanh nghiệp: Nhỏ, linh hoạt, đánh nhanh rút gọn
* 💘 Tình yêu: Thả thính vài lần rồi ghost
* 🕵️ Chiến lược: Du kích – đánh xong rút lẹ (ví dụ: mì Thanh Long ôm cú hit rồi biến)

3. Cân bằng Nash – Không ai dám đổi chiến thuật vì… đổi là thua
🧠 Phân tích chiến lược & ví dụ minh họa bằng Ma trận lợi ích
                          |  B: Không giảm.           | B: Giảm
A: Không giảm             | (10, 10)                  | (2, 15)                  
A: Giảm                   | (15, 2)                   | (5, 5) —> Cân bằng Nash                     
Định nghĩa Cân bằng Nash(John Nash, 1950):
Một tập hợp chiến lược là cân bằng Nash nếu không người chơi nào có thể cải thiện kết quả của mình bằng cách đơn phương thay đổi chiến lược, giả định các đối thủ giữ nguyên chiến lược.
✅ Diễn giải đơn giản:
Bạn biết rằng nếu bạn đổi hướng (ngừng khuyến mãi), mà người kia không đổi, thì bạn lỗ.
Thế nên bạn không đổi. Họ cũng không đổi.
→ Ai cũng không vui, nhưng chẳng ai dám nhúc nhích.
→ Trong tình yêu, đó là lúc bạn vẫn tiếp tục tán crush dù thấy không có tín hiệu gì, chỉ vì thằng kia cũng đang tán crush.

4. Công thức toán – Khuyến mãi có lời không? Còn tuỳ bạn có tăng được doanh thu không
Giả sử:
 • GM = a% (Gross Margin – biên lợi nhuận gộp)
 • Giảm giá p%
✅ Công thức:
Doanh thu mới cần tăng (%) = a/(a - p) 
🔢 Mức giảm giá & Doanh thu cần tăng để giữ nguyên lợi nhuận, giả định GM = 42%
| Giảm giá (%)          | Doanh thu cần tăng (%) 
|      5%               |         +13.5%          
|     10%               |         +31.2%          
|     15%               |         +55.5%          
|     20%               |         +90.9%          
Như vậy để bảo toàn lợi nhuận thì DN cần triển khai các biện pháp tăng Doanh thu/ Kích cầu và Giảm chi phí (Thắt lưng buộc bụng), và hành động này chỉ nên ngắn hạn thôi không là DN gánh không nỗi đâu.
Thực tế tại Việt Nam, cuộc chiến về giá của FPT và Thế Giới Di Động là minh chứng cho trò chơi này. 
(https://tuoitre.vn/chien-gia-khoc-liet-the-gioi-di-dong...)
Và sự sập tiệm của các Local Brand thời trang tại Việt Nam từ hành vi săn sale, săn deals hời của NTD trên các sàn TMĐT
(https://cafef.vn/local-brand-viet-dang-qua-kho-khan-nhieu...)
🔍 Lưu ý khi chọn chiến thuật giảm giá:
Phụ thuộc vào:
 • Sức mua thị trường
 • Tâm lý người tiêu dùng
 • Hành vi tại điểm bán
 • Chu kỳ sản phẩm
 • Động thái đối thủ
 • Mức độ cạnh tranh ngành
 • Tình hình tài chính doanh nghiệp
 • Văn hoá ngành hàng
 • Khả năng thay đổi công nghệ, định giá linh hoạt, gói sản phẩm
...
Nói chung CEO phải ở cái tầm Tổng tư lệnh mới điều binh, khiển tướng trong cuộc chiến thị trường này. Và tình yêu cũng vậy, ta yêu nàng nhưng để có được nàng thì ta phải tiêu diệt/ đánh bại đối thủ của mình.

5. Diễn giải Bayes – Like không phải là mua, thích không phải là yêu
Chúng ta là một khảo sát thị trường nhỏ như vầy: 
😏 Like không phải là mua
Thích không phải là yêu – nhìn bảng mà tỉnh
🧪 Khảo sát nhanh (n = 20 người):
2 câu hỏi trên thang điểm 5
 • “Bạn thích chương trình khuyến mãi mức độ nào?”
 • “Bạn có ý định mua ở mức độ nào?”
📊 BẢNG TÓM TẮT KHẢO SÁT (n = 20)
|                                       | LIKE (L)     | Không LIKE (~L)  
| Có ý định mua (P)                     | a = 6        | b = 0              
| Không có ý định (~P)                  | c = 8        | d = 6             
🎯 Tính Bayes:
P(P | L) = a / (a + c) = 6 / 14 ≈ 42.9%
“Trong khảo sát này, chỉ 42.9% người like chương trình thực sự có ý định mua.”
Nghĩa là: hơn một nửa like là… cho vui, lịch sự mà like nhưng không mua gì hết.
→ Các giả định về số liệu này phải thu thập từ các nghiên cứu NTD và dữ liệu nội bộ công ty. Nên phải thật tỉnh táo khi thiết kế nghiên cứu, thu thập và xử lý số liệu, nên nhớ rằng garbage in, garbage out, xào nấu dữ liệu xấu thì bạn cũng đang làm công việc tái chế rác mà thôi. (Đây chỉ là ví dụ minh hoạ rất đơn giản về tác động của chương trình khuyến mãi lên ý định mua, có nhiều yếu tố liên quan đến ý định mua tuy nhiên nó là một vấn đề lớn mà ta không bàn ở bài viết này.)
→ Các thiên kiến của người làm nghiên cứu hay của Marketer sẽ làm méo mó dữ liệu thực tế từ đó mà các quyết định trở nên lố bịch, không thực tế. Và ở Việt Nam thì thôi rồi, cứ hay có vụ mớm ý, ép cung để NTD nói đúng ý của MKT, thật nực cười.

🧠 6. Phản ứng của người tiêu dùng với chương trình khuyến mãi: Góc nhìn từ nghiên cứu hành vi
Các chương trình khuyến mãi không chỉ tác động đến hành vi mua, mà còn ảnh hưởng đến nhận thức thương hiệu.
📌 Dưới đây là 4 insight hành vi của NTD khi đứng trước biển khuyến mãi dập dồn sóng:

• Khuyến mãi nhiều khiến người ta nghi ngờ chất lượng
→ Kiểu như ai cũng tặng hoa thì dễ nghĩ: “Ủa, chắc không ai mua nên mới sale hoài ha?” hoặc “Của rẻ là của hôi.”
📚 Nguồn: Raghubir & Corfman (1999)

• Giảm giá giúp tăng doanh số nhanh, nhưng về lâu dài người ta bớt thích bạn
→ Giống như tán crush bằng cách bao trà sữa liên tục – lúc đầu vui, sau thấy… có gì đó sai sai.
📚 Nguồn: DelVecchio et al. (2006)

• Giảm mạnh khiến người ta mua trữ rồi… biến mất nếu sản phẩm không đủ “gây nghiện”
→ Tặng nguyên combo quà tỏ tình khiến người ta “xài dần rồi né mình luôn”.
📚 Nguồn: Ailawadi et al. (2007)

• Hiệu quả khuyến mãi tuỳ kiểu lợi ích và loại sản phẩm
→ Đồ thực dụng thì nên giảm giá trực tiếp. Đồ cảm xúc thì khuyến mãi kiểu “độc – lạ – dễ khoe” lại ăn điểm hơn.
→ Như tán crush bằng lời hay ý đẹp sẽ hợp hơn với người thích… ngôn tình.
📚 Nguồn: Chandon et al. (2000)

🔍 Lưu ý quan trọng:
Các phản ứng hành vi này còn phụ thuộc vào thời gian – ngành hàng – vùng văn hóa – nhóm khách – đặc điểm sản phẩm.
→ Không thể “tán ai cũng xài một chiêu” – muốn hiệu quả, phải nghiên cứu hành vi tại điểm bán.

7. Kết luận – Đừng bán rẻ bản thân chỉ vì người ta hay nhìn bạn
Trong tình yêu:
 • Bạn tán tỉnh bằng quà, bằng quan tâm.
 • Nhưng nếu không đáp ứng đúng nhu cầu thiết yếu của crush (an toàn, vui vẻ, thấu hiểu), bạn chỉ là một người dễ thương tốn tiền.
Trong kinh doanh:
 • Khuyến mãi không phải là chiến lược.
 • Hãy quay về 4P:
→ Sản phẩm tốt + Giá hợp lý + Phân phối đúng + Quảng bá hiệu quả
→ Customer choose the best bundle of good they can afford 
🎯 Chiến thuật khuyến mãi chỉ là công cụ tăng chuyển đổi, không thay thế được:
 • Sản phẩm hấp dẫn
 • Trải nghiệm khách hàng tử tế
 • Giá trị thương hiệu rõ ràng

📌 Thông điệp cuối cùng – vừa hài vừa sâu:
Flirting không khiến người ta yêu vì nó chỉ tạo thu hút crush thôi, và khuyến mãi cũng thế không khiến người ta trung thành.
Trái tim (và ví tiền) chỉ trung thành với giá trị thực – không phải giá giảm.
(Bài viết này không áp dụng cho ngành hàng xa xỉ nhé)
🔁 Bạn thấy mình là kiểu người chơi nào? Leader, Challenger, hay... Guerrilla?
💬 Comment chia sẻ kiểu “tán tỉnh” bạn từng dùng – hoặc đã bị dùng lên mình
