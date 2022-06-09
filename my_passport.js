 function showPreview(event) {
                        if (event.target.files.length > 0) {
                            var src = URL.createObjectURL(event.target.files[0]);
                            var preview = document.getElementById("file-ip-1-preview");
                            preview.src = src;
                            preview.style.display = "block";
                        }
                    }
                    function showPreview2(event) {
                        if (event.target.files.length > 0) {
                            var src = URL.createObjectURL(event.target.files[0]);
                            var preview = document.getElementById("file-ip-1-preview2");
                            preview.src = src;
                            preview.style.display = "block";
                               }
                    }
                    function ko() {
                        console.log("Preparing to Send...");
                    }
                    function saveData() {
                        let name, email, psw;
                        fname = document.getElementById("fname").value;
                        dob = document.getElementById("dob").value;
                        carDiag = document.getElementById("carDiag").value;
                        pastSur = document.getElementById("pastSur").value;
                        pastCat = document.getElementById("pastCat").value;
                        impDev = document.getElementById("impDev").value;
                        oxy = document.getElementById("oxy").value;
                        resting = document.getElementById("resting").value;
                        bp = document.getElementById("bp").value;
                        hemo = document.getElementById("hemo").value;
                        inr = document.getElementById("inr").value;
                        iep = document.getElementById("yes").value;
                        io = document.getElementById("no").value;
                        par = document.getElementById("par").value;
                        genetic = document.getElementById("genetic").value;
                        mmi = document.getElementById("mmi").value;
                        cm = document.getElementById("cm").value;
                        aller = document.getElementById("aller").value;
                        mpc = document.getElementById("mpc").value;
                        mpp = document.getElementById("mpp").value;
                        mci = document.getElementById("mci").value;

                        localStorage.setItem("fname", fname);
                        localStorage.setItem("dob", dob);
                        localStorage.setItem("carDiag", carDiag);
                        localStorage.setItem("pastSur", pastSur);
                        localStorage.setItem("pastCat", pastCat);
                        localStorage.setItem("impDev", impDev);
                        localStorage.setItem("oxy", oxy);
                        localStorage.setItem("resting", resting);
                        localStorage.setItem("bp", bp);
                        localStorage.setItem("hemo", hemo);
                        localStorage.setItem("inr", inr);
                        localStorage.setItem("iep", iep);
                        localStorage.setItem("io", io);
                        localStorage.setItem("par", par);
                        localStorage.setItem("genetic", genetic);
                        localStorage.setItem("mmi", mmi);
                        localStorage.setItem("cm", cm);
                        localStorage.setItem("aller", aller);
                        localStorage.setItem("mpc", mpc);
                        localStorage.setItem("mpp", mpp);
                        localStorage.setItem("mci", mci);
                        alert('Info is locally saved for you! Please download your PDF');
                        
                        
                        
                        
                        
                        
                        
                        
                        
                 
